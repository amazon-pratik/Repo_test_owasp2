#{fact rule=xml-external-entity@v1.0 defects=0}

def ok():
    # ok: use-defused-xml
    import defusedxml
    # ok: use-defused-xml
    from defusedxml.etree import ElementTree
    tree = ElementTree.parse('country_data.xml')
    root = tree.getroot()

#{/fact}
