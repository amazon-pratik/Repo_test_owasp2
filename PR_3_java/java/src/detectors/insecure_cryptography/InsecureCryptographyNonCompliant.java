// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=java-crypto-key-pair-generator@v1.0 defects=1}
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;

public class InsecureCryptographyNonCompliant {

    // Noncompliant: Key size is insufficient for cryptographic algorithm.
    // Note: NIST recommends at least 2048 bits for RSA keys for adequate security.
    public void nonCompliant() throws NoSuchAlgorithmException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        // This is deliberately using an insecure key size for demonstration
        keyPairGenerator.initialize(128);
        keyPairGenerator.genKeyPair();
    }
}
// {/fact}
