<?php

// {fact rule=incorrect-comparison@v1.0 defects=1}
// ruleid: md5-loose-equality
md5("240610708") == "0";
// {/fact}

// {fact rule=incorrect-comparison@v1.0 defects=1}
// ruleid: md5-loose-equality
0 == md5("240610708");
// {/fact}

// {fact rule=incorrect-comparison@v1.0 defects=1}
// ruleid: md5-loose-equality
0 == md5_file("file.txt");
// {/fact}

// {fact rule=incorrect-comparison@v1.0 defects=1}
// ruleid: md5-loose-equality
md5("240610708") == md5_file("file.txt");
// {/fact}

// {fact rule=incorrect-comparison@v1.0 defects=0}
// ok: md5-loose-equality
md5("240610708") === "0";
// {/fact}
