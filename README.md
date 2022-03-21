# Design

    UI should capture below fileds
        * TO
        * CC
        * BCC
        * Subject
        * Body
        * Provider - options MailChimp and SendGrid

    Validations Done:
        * TO,CC and BCC should accept 1 or more email. seprated by ";"
        * Email should accept character, number and '.'
           * email fileds "TO,CC,BCC".
        * All fields are mandatory.
        * Subject and Body should not contain empty value.

    Redux state:
        * sendEmail - will maintain the list of email sent. Once we get the success response will update it.
        * isEmailSent - will update once we get the success reponse.
        * isAPIError - will update once we receive other than 200.ie failure response from api.

    Routing
        Email page
        Confirmation page

Due to time constrain unable to cover test case.

# Planned unit test case:

    * Should get error message when we get other than 200 from api.
    * Should redirect to confirmation screen when we gett 200 response.
    * Validate Email fileds
        Should return error for below inputs
            ["aaaa>*gmail.com,aaaa%gmail.com"]
        Should not return error for valid email
            [balaji@gmail.com,Mohan@gmail.com]
    * Should validate Body and Subject for emtpy value
    * Should return mandatory error message if values are not filled.
    * Should validate Provider filed.

Implemented only SendGrid mail due to time constrain.

How to start

npm start
