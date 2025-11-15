#{fact rule=resource-leak@v1.0 defects=1}


# ruleid: missing-throttle-config
REST_FRAMEWORK = {
    'PAGE_SIZE': 10
}

#{/fact}
