encodeProductDescription (tableData: any[]) {
  for (let i = 0; i < tableData.length; i++) {
    // {fact rule=cross-site-scripting@v1.0 defects=1}
    // ruleid: detect-replaceall-sanitization
    tableData[i].description = tableData[i].description.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    // {/fact}

    // {fact rule=cross-site-scripting@v1.0 defects=0}
    // ok
    tableData[i].description = tableData[i].description.replaceAll('<', 'left angle bracket')
    // {/fact}
  }
}
