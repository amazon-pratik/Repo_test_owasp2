
const baba = "baba"
// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:no-replaceall
const str1 = old_str1.replaceAll(baba, "    ");
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:no-replaceall
const str1 = old_str1.replaceAll(hello, "    ");
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid:no-replaceall
const str2 = old_str2.replaceAll("\t", "    ")
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok:no-replaceall
const str3 = old_str3.replace("\t", "    ");
// {/fact}

