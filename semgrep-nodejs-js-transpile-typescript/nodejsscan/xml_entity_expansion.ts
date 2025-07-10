// {fact rule=xml-external-entity@v1.0 defects=1}
app.get('/expat', function (req: { param: (arg0: string) => any; }, res: any) {
    // ruleid:node_entity_expansion
    var parser = new expat.Parser();
    parser.write(req.param("xml"));
})
// {/fact}
