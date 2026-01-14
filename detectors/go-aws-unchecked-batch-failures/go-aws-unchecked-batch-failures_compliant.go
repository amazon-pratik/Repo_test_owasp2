// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

package aws

// {fact rule=go-aws-unchecked-batch-failures@v1.0 defects=0}
import (
	"context"
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/sns"
)

func awsUncheckedBatchFailuresCompliant(topicARN string, cfg aws.Config) {
	client := sns.NewFromConfig(cfg)

	// Compliant: Batch operation is performed with proper error handling.
	output, err := client.PublishBatch(context.TODO(), &sns.PublishBatchInput{
		TopicArn: &topicARN,
	})
	
	if err != nil {
		fmt.Printf("Error publishing batch: %v\n", err)
		return
	}
	
	// Check for failed entries
	if len(output.Failed) > 0 {
		fmt.Printf("Some messages failed to publish: %d failures\n", len(output.Failed))
		for _, failure := range output.Failed {
			fmt.Printf("Message ID: %s, Error: %s, Code: %s\n", 
				*failure.Id, 
				*failure.ErrorMessage, 
				*failure.ErrorCode)
		}
	}

	fmt.Printf("Successfully published %d messages\n", len(output.Successful))
}
// {/fact}