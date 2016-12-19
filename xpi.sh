#!/usr/bin/env bash

# Extract add-on version from the Resource Description Framework(RDF) file
version=$(
python <<EOF
from xml.dom import minidom
import sys

xml = minidom.parse('install.rdf')
version = xml.getElementsByTagName('em:version')
version = version[0].firstChild.nodeValue if version else ''
sys.stdout.write(version)
EOF
)

# Package the extension
xpi_name="delete-read-emails@nkmathew.net.$version.xpi"
rm -f $xpi_name
7z a $xpi_name install.rdf chrome.manifest chrome/ | grep Compressing
echo -e "\n>>> $xpi_name"
