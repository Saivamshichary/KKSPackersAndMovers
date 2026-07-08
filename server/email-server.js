import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Email submission endpoint
app.post('/api/send-quote', async (req, res) => {
  try {
    const { name, phone, movingFrom, movingTo } = req.body;

    // Validate required fields
    if (!name || !phone || !movingFrom || !movingTo) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to owner
    const ownerEmailContent = {
      to: process.env.OWNER_EMAIL || 'info@kkspackers.com',
      from: process.env.SENDER_EMAIL || 'noreply@kkspackers.com',
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B35;">New Quote Request</h2>
          <p>You have received a new quote request from a potential customer.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #004E89; margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Moving From:</strong> ${movingFrom}</p>
            <p><strong>Moving To:</strong> ${movingTo}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Please contact the customer at your earliest convenience to provide a quote.
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            This is an automated email from KKS Packers & Movers Website
          </p>
        </div>
      `,
    };

    // Email to customer (confirmation)
    const customerEmailContent = {
      to: process.env.CUSTOMER_REPLY_EMAIL ? phone : null, // Only send if configured
      from: process.env.SENDER_EMAIL || 'noreply@kkspackers.com',
      subject: 'Quote Request Received - KKS Packers & Movers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B35;">Thank You for Your Request!</h2>
          <p>Dear ${name},</p>
          
          <p>We have received your quote request and our team will contact you shortly.</p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #004E89; margin-top: 0;">Your Request Details:</h3>
            <p><strong>Moving From:</strong> ${movingFrom}</p>
            <p><strong>Moving To:</strong> ${movingTo}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <p>We appreciate your interest in KKS Packers & Movers. Our team will analyze your requirements and provide you with the best possible quote.</p>

          <p style="margin-top: 30px;">
            <strong>Contact Information:</strong><br>
            Phone: ${process.env.OWNER_PHONE || '+91 98765 43210'}<br>
            Email: ${process.env.OWNER_EMAIL || 'info@kkspackers.com'}
          </p>

          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Best regards,<br>
            <strong>KKS Packers & Movers Team</strong>
          </p>
        </div>
      `,
    };

    // Send owner email (always)
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send(ownerEmailContent);
    } else {
      console.log('Owner Email (SendGrid not configured):', ownerEmailContent);
    }

    // Send customer confirmation email (if configured)
    if (process.env.SENDGRID_API_KEY && process.env.CUSTOMER_REPLY_EMAIL === 'true') {
      try {
        await sgMail.send(customerEmailContent);
      } catch (err) {
        console.error('Error sending customer email:', err);
        // Don't fail the request if customer email fails
      }
    }

    // Log quote request to console (for testing without SendGrid)
    console.log('Quote Request Received:', {
      name,
      phone,
      movingFrom,
      movingTo,
      timestamp: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Quote request submitted successfully. We will contact you soon!',
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({
      error: 'Failed to submit quote request. Please try again.',
      details: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`SendGrid configured: ${process.env.SENDGRID_API_KEY ? 'Yes' : 'No'}`);
});
