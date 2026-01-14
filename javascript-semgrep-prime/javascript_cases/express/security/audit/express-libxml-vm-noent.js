var libxml = require("libxml")

function handleXmlUpload ({ file }: Request, res: Response, next: NextFunction) {
  if (utils.endsWith(file?.originalname.toLowerCase(), '.xml')) {
    if (file?.buffer && !utils.disableOnContainerEnv()) { // XXE attacks in Docker/Heroku containers regularly cause "segfault" crashes
      const data = file.buffer.toString()
      try {
        const sandbox = { libxml, data }
        vm.createContext(sandbox)
        // {fact rule=xml-external-entity@v1.0 defects=1}
        // ruleid: express-libxml-vm-noent
        const xmlDoc = vm.runInContext('libxml.parseXml(data, { noblanks: true, noent: true, nocdata: true })', sandbox, { timeout: 2000 })
        // {/fact}

        // {fact rule=xml-external-entity@v1.0 defects=1}
        // ruleid: express-libxml-vm-noent
        const xmlDoc = vm.runInContext("libxml.parseXml(data, { noblanks: true, noent: true, nocdata: true })", sandbox, { timeout: 2000 })
        // {/fact}

        // {fact rule=xml-external-entity@v1.0 defects=1}
        // ruleid: express-libxml-vm-noent
        libxml.parseXml(data, { noblanks: true, noent: true, nocdata: true })
        // {/fact}

        // {fact rule=xml-external-entity@v1.0 defects=1}
        const xml_opts = { noblanks: true, noent: true, nocdata: true }
        // ruleid: express-libxml-vm-noent
        libxml.parseXml(data, xml_opts)
        // {/fact}

        // {fact rule=xml-external-entity@v1.0 defects=0}
        // ok: express-libxml-vm-noent
        libxml.parseXml(data, { noblanks: true, nocdata: true })
        // {/fact}

        const xmlString = xmlDoc.toString(false)
        res.status(410)
        next(new Error('B2B customer complaints via file upload have been deprecated for security reasons: ' + utils.trunc(xmlString, 400) + ' (' + file.originalname + ')'))
      } catch (err) {
        if (utils.contains(err.message, 'Script execution timed out')) {
          res.status(503)
          next(new Error('Sorry, we are temporarily not available! Please try again later.'))
        } else {
          res.status(410)
          next(new Error('B2B customer complaints via file upload have been deprecated for security reasons: ' + err.message + ' (' + file.originalname + ')'))
        }
      }
    } else {
      res.status(410)
      next(new Error('B2B customer complaints via file upload have been deprecated for security reasons (' + file?.originalname + ')'))
    }
  }
  res.status(204).end()
}
