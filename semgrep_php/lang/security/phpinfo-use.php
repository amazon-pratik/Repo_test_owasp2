<?php

// {fact rule=sensitive-information-leak@v1.0 defects=1}
// ruleid: phpinfo-use
echo phpinfo();
// {/fact}
