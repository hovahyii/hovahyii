'use client';

import AnnouncementBox from "./AnnouncementBox";

export default function CursorTutorialContent() {
  return (
    <div className="prose lg:prose-xl max-w-none">
      <AnnouncementBox 
        title="🎉 Breaking News from Cursor!"
        message="Cursor is now free for students. Enjoy!"
        linkText="View Official Announcement on X"
        linkUrl="https://x.com/cursor_ai/status/1919846420234031146"
      />
      
      <p className="lead">
        Exciting news! Cursor just announced that their Premium version is now free for all students. Here's how you can get free Cursor using your student email:
      </p>
      
      <h2>Step 1: Go to the Cursor Education Page</h2>
      <p>Visit the Cursor education verification page to start the process.</p>
      
      <h2>Step 2: Login with Your Student Email</h2>
      <p>Once you login, key in your student email and password.</p>
      
      <h2>Step 3: Submit the Form</h2>
      <p>Once you successfully submit the form, you will receive an email.</p>
      
      <h2>Step 4: Verify Your Email</h2>
      <p>Click the verify button in the email.</p>
      
      <h2>Step 5: Complete Verification</h2>
      <p>Then it will navigate to the verification page.</p>
      
      <h2>Step 6: Wait for Verification</h2>
      <p>Once SheerID verifies your student status, it will send you an email.</p>
      
      <h2>Step 7: Add Payment Method</h2>
      <p>However, the downside is you still have to bind your MasterCard to activate the freemium for a year.</p>
      
      <h2>Result</h2>
      <p>After completing all steps, you'll have access to Cursor Premium features for a full year at no cost!</p>
      
      <h2>Why Cursor Premium?</h2>
      <p>Cursor Premium offers enhanced AI capabilities for developers, making coding faster and more efficient. As a student, this is an excellent opportunity to boost your productivity while learning.</p>
    </div>
  );
}