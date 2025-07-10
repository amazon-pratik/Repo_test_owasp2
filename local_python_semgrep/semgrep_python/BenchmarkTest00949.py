#{fact rule=xml-external-entity@v1.0 defects=1}

def bad():
    # ruleid: use-defused-xml
    import xml
    # ruleid: use-defused-xml
    from xml.etree import ElementTree
    tree = ElementTree.parse('country_data.xml')
    root = tree.getroot()

#{/fact}
