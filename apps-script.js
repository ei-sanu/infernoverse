// Google Apps Script code for Google Sheets integration
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Get the active spreadsheet (make sure to replace with your spreadsheet ID)
    const spreadsheet = SpreadsheetApp.openById('https://script.google.com/macros/s/AKfycbzxI9je3QBACg9S3ssA0DynHTEOAxmy48NbyLgrZVUaUr2uoHHkGmr3C83OgMb8SWaM/exec');
    const sheet = spreadsheet.getActiveSheet();

    // Parse the POST data
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data in the order you want it in the sheet
    const rowData = [
      new Date(), // Timestamp
      data.fullName || '',
      data.mobile || '',
      data.email || '',
      data.registrationNumber || '',
      data.course || '',
      data.year || '',
      data.teamLeaderName || '',
      data.leaderRegNumber || '',
      data.member1Name || '',
      data.member1RegNumber || '',
      data.member2Name || '',
      data.member2RegNumber || '',
      data.member3Name || '',
      data.member3RegNumber || '',
      data.teamName || '',
      data.address || '',
      data.pincode || '',
      data.city || '',
      data.accountHolderName || '',
      data.utrNumber || ''
    ];

    // Add headers if this is the first entry
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Full Name',
        'Mobile Number',
        'Email ID',
        'Registration Number',
        'Course',
        'Year of Study',
        'Team Leader Name',
        'Leader Registration Number',
        'Member 1 Name',
        'Member 1 Registration Number',
        'Member 2 Name',
        'Member 2 Registration Number',
        'Member 3 Name',
        'Member 3 Registration Number',
        'Team Name',
        'Address',
        'Pincode',
        'City',
        'Account Holder Name',
        'UTR Number'
      ];
      sheet.appendRow(headers);
    }

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Registration data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        fullName: 'Test User',
        mobile: '1234567890',
        email: 'test@example.com',
        registrationNumber: 'TEST123',
        course: 'BTech',
        year: '2nd Year',
        teamLeaderName: 'Team Leader',
        leaderRegNumber: 'LEAD123',
        teamName: 'Test Team',
        address: 'Test Address',
        pincode: '123456',
        city: 'Test City',
        accountHolderName: 'Test Account',
        utrNumber: 'UTR123456'
      })
    }
  };

  console.log(doPost(testData));
}

// Instructions for setup:
// 1. Create a new Google Sheets document
// 2. Note down the Spreadsheet ID from the URL
// 3. Go to Extensions > Apps Script
// 4. Replace the default code with this code
// 5. Replace 'YOUR_SPREADSHEET_ID' with your actual spreadsheet ID
// 6. Deploy as web app with the following settings:
//    - Execute as: Me
//    - Who has access: Anyone
// 7. Copy the web app URL and replace 'YOUR_SCRIPT_ID' in the Registration component
// 8. The script will automatically create headers on first submission
