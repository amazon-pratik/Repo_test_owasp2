// {fact rule=weak-password-recovery-mechanism@v1.0 defects=1}
package main

import (
	"net/http"
	"net/smtp"
)

// Define the backend structure with the necessary method
type Backend struct{}

func (b *Backend) getUserSecretResetToken(email string) string {
	// Stub implementation for generating a reset token
	return "reset-token"
}

var backend = &Backend{}

// Define the email variable (for this example, we use a hardcoded email)
var email = "user@example.com"

// Define the config for SMTP settings
var smtpServer = "smtp.example.com:25" // Replace with your SMTP server address
var fromEmail = "from@example.com"

func mail(w http.ResponseWriter, r *http.Request) {
	host := r.Header.Get("Host")
	token := backend.getUserSecretResetToken(email)
	body := "Click to reset password: " + host + "/" + token
	smtp.SendMail("test.test", nil, "from@from.com", nil, []byte(body))
}
// {/fact}
