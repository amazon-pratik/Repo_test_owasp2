// {fact rule=do-not-auto-add-or-warning-missing-hostkey-policy@v1.0 defects=0}
package main

import (
	"io/ioutil"

	"golang.org/x/crypto/ssh"
)


func secureHostKeyCallback() {
	publicKeyBytes, _ := ioutil.ReadFile("allowed_hostkey.pub")
	publicKey, _ := ssh.ParsePublicKey(publicKeyBytes)

	_ = &ssh.ClientConfig{
		User:            "username",
		Auth:            []ssh.AuthMethod{nil},
		HostKeyCallback: ssh.FixedHostKey(publicKey),
	}
}

// {/fact}
