#!/usr/local/bin/node

let xls = require('node-xlsx')
let fs = require('fs')

let ordinal = require('ordinal')
let excel = xls.parse('./operations/data.xlsx')

let datas = []

let sheets = [

  // filters
  'Filters',

  // DataSummary, residents, homes, and contribution
  'US Apt Residents',
  'State Apt Residents',
  'Metro Apt Residents',
  'District Apt Residents',

  'US Apts',
  'State Apartments',
  'Metro Occupied Apartments',
  'District Occupied Apts',

  'US Economic Contribution',
  'State Economic Contribution',
  'Metro Economic Contribution',
  'District Economic Contribution',

  'US Jobs',
  'State Jobs',
  'Metro Jobs',
  'District Total Jobs',

  // Natinoal Page - Apt Household Growth, rentership grwoth, population growth
  'US Apt HHs (Landing)',
  'US Rentership Rate (Landing)',
  'US Population (Landing)',

  // State Page - Apt Household Growth, rentership grwoth, population growth
  'State New Apt HHs Per Year',
  'State Rentership Rate',
  'State HH Growth',

  // Metro Page - Apt Household Growth, rentership grwoth, population growth
  'Metro New Apt HHs Per Year',
  'Metro Rentership Rate',
  'Metro Pop Growth',

  // Metro page - Restriction Index (heat graph)
  'Metro Restriction Index',

  // build more - all pages
  'US Building 2',
  'State Building Current',
  'State Building Needed',

  // district page copy values
  'district economic impact',
  // 'District Apt Residents',

]

for (let index in excel) {
  if (sheets.indexOf(excel[index].name) === -1) {
    continue
  }

  let sheet = excel[index]
  let data = {}

  data.sheet = sheet.name
  data.data = {}

  let labels = sheet.data[0]

  // remove 'Year' from our labels
  labels.shift()
  sheet.data.shift()
  data.labels = labels
  data.data = []

  switch (sheet.name) {

    case 'Filters':
      for (let value in sheet.data) {
        if (sheet.data[value].length === 0) {
          continue
        }
        let left = sheet.data[value][0]
        if (left !== undefined) {
          sheet.data[value].shift()
        }

        data.data.push({
          State: left,
          Abbeviation: sheet.data[value][0],
          Metro: sheet.data[value][1],
          District: sheet.data[value][2]
        })
      }
      break

    case 'US Apt Residents':
    case 'State Apt Residents':
    case 'Metro Apt Residents':
    case 'US Apts':
    case 'State Apartments':
    case 'Metro Occupied Apartments':
    case 'US Economic Contribution':
    case 'State Economic Contribution':
    case 'Metro Economic Contribution':
    case 'US Jobs':
    case 'State Jobs':
    case 'Metro Jobs':
    case 'US Apt HHs (Landing)':
    case 'US Rentership Rate (Landing)':
    case 'US Population (Landing)':
    case 'State HH Growth':
    case 'Metro Restriction Index':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value][0]]] = sheet.data[value][1]
        }
      }
      break

    case 'District Apt Residents':
    case 'District Occupied Apts':
    case 'District Economic Contribution':
    case 'District Total Jobs':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value][0]] + ' ' + ordinal(sheet.data[value][1])] = sheet.data[value][2]
        }
      }
      break
    case 'district economic impact':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value].shift()] + ' ' + ordinal(sheet.data[value].shift())] = sheet.data[value]
        }
      }
      break

    // array of elements per-year, choose the elements using the label list
    case 'State New Apt HHs Per Year':
    case 'State Rentership Rate':
    case 'Metro New Apt HHs Per Year':
    case 'Metro Rentership Rate':
    case 'Metro Pop Growth':
    case 'US Building 2':
    case 'State Building Current':
    case 'State Building Needed':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value].shift()]] = sheet.data[value]
        }
      }
      break

    default:
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data.push(sheet.data[value])
        }
      }
      break

  }

  fs.writeFileSync('./store/' + sheet.name + '.json', JSON.stringify(data, null, 2))
}

