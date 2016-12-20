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

# Output the xpi size and name
xpi_size=$(stat -c%s $xpi_name)
xpi_size=$(($xpi_size/1000))
echo -e "\nSize: ${xpi_size}KB\nName: $xpi_name"

# Don't restart Thunderbird if flag "-n" is passed
if [[ ! $1 == -n ]]; then
  wget --quiet --post-file=$xpi_name http://127.0.0.1:8888/
fi
