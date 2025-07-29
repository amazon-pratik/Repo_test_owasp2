// {fact rule=do-not-auto-add-or-warning-missing-hostkey-policy@v1.0 defects=1}
package main

import (
	"net"

	"golang.org/x/crypto/ssh"
)

func main() {}

func insecureIgnoreHostKey() {
	_ = &ssh.ClientConfig{
		User:            "username",
		Auth:            []ssh.AuthMethod{nil},
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}
}

func insecureHostKeyCallback() {
	_ = &ssh.ClientConfig{
		User: "username",
		Auth: []ssh.AuthMethod{nil},
		HostKeyCallback: ssh.HostKeyCallback(
			func(hostname string, remote net.Addr, key ssh.PublicKey) error {
				return nil
			}),
	}
}

// {/fact}
