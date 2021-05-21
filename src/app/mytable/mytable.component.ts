import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { h, PluginPosition, Row } from 'gridjs';

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.less']
})
export class MytableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public config = {
    sort: true,
    columns: ['Name','year_founded', 'state','city','facilities'],
    search: true,
    resizable: true,
    pagination: true,
    plugins: [
      {
        id: 'myplugin',
        component: h(() => h('h1', {}, 'Hello world!'), {}),
        position: PluginPosition.Header,
      },
    ],
    style: {
      table: {
        border: '3px solid #ccc',
        'page-break-inside' : 'auto'
      },
      th: {
        'background-color': 'rgba(0, 0, 0, 0.1)',
        color: '#000',
        'border-bottom': '3px solid #ccc',
        'text-align': 'center'
      },
      td: {
        'text-align': 'center',
        'page-break-inside': 'avoid',
        'page-break-after' : 'auto',
        'padding' : '10px 10px 10px 10px'
      },
      
    },
    
    data: [
      {
        "name": "AVVM Sri Pushpam College",
        "year_founded": 1972,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "comp labs,sports,laboratory,library,auditorium,medical,classrooms,cafeteria,transport,banks"
      },
      {
        "name": "Alpha Arts and Science College - [AASC]",
        "year_founded": 1996,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "cafeteria,classrooms,medical,sports,auditorium"
      },
      {
        "name": "A.D.M. College for Women - [ADMC]",
        "year_founded": 1975,
        "state": "Tamil Nadu",
        "city": "Nagapattinam",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel,canteen"
      },
      {
        "name": "ADN Medical College and Paramedical Science",
        "year_founded": 2006,
        "state": "Maharashtra",
        "city": "Nagpur",
        "facilities": "medical,hostel,gym,sports,cafeteria,auditorium,library,laboratory,comp labs"
      },
      {
        "name": "AGL Degree and PG College",
        "year_founded": 1991,
        "state": "Andhra Pradesh",
        "city": "Visakhapatnam",
        "facilities": "laboratory,library,gym,sports,medical,auditorium,comp labs,hostel,cafeteria"
      },
      {
        "name": "AJK College of Arts and Science",
        "year_founded": 2006,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,cafeteria,library,auditorium,laboratory,hostel,gym,sports,medical"
      },
      {
        "name": "AM Jain College",
        "year_founded": 1952,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "laboratory,library,gym,sports,auditorium,medical,hostel,comp labs,cafeteria,classrooms,e-classroom,banks"
      },
      {
        "name": "AP Bahuguna Government PG College",
        "year_founded": 1974,
        "state": "Uttarakhand",
        "city": "Rudraprayag",
        "facilities": "library,laboratory,cafeteria,comp labs,sports,gym,auditorium,medical,hostel"
      },
      {
        "name": "AP Sen Memorial Girls Degree College",
        "year_founded": 1902,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,transport,gym"
      },
      {
        "name": "Arulmigu Palaniandavar College of Arts and Culture Palani",
        "year_founded": 1963,
        "state": "Tamil Nadu",
        "city": "Dindigul",
        "facilities": "laboratory,library,sports,hostel,cafeteria,comp labs,medical,auditorium"
      },
      {
        "name": "A.P.C. Mahalaxmi College for Women",
        "year_founded": 1974,
        "state": "Tamil Nadu",
        "city": "Thoothukudi",
        "facilities": "comp labs,laboratory,library,hostel,cafeteria,canteen"
      },
      {
        "name": "AR Burla Mahila Varishtha Mahavidyalaya",
        "year_founded": 1990,
        "state": "Maharashtra",
        "city": "Solapur",
        "facilities": "comp labs,gym,library,laboratory,cafeteria"
      },
      {
        "name": "ARG Arts and Commerce College",
        "year_founded": 1973,
        "state": "Karnataka",
        "city": "Davanagere",
        "facilities": "library,cafeteria,comp labs,sports,laboratory,auditorium"
      },
      {
        "name": "AS College",
        "year_founded": 1946,
        "state": "Punjab",
        "city": "Khanna",
        "facilities": "comp labs,medical,cafeteria,library,auditorium,canteen,gym"
      },
      {
        "name": "A.V. College of Arts Science and Commerce - [AV College]",
        "year_founded": 1968,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,e-classroom,transport"
      },
      {
        "name": "AVC College (Autonomous)",
        "year_founded": 1955,
        "state": "Tamil Nadu",
        "city": "Mayiladuthurai",
        "facilities": "sports,medical,library,auditorium,hostel,banks,laboratory,transport"
      },
      {
        "name": "AVK Group of Institutions",
        "year_founded": 2000,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "hostel,medical,sports,cafeteria,gym,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "AVS College of Arts & Science",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "comp labs,medical,cafeteria,library,auditorium,hostel,gym,laboratory,sports,transport"
      },
      {
        "name": "AWH Special College",
        "year_founded": 1996,
        "state": "Kerala",
        "city": "Calicut",
        "facilities": "comp labs,sports,laboratory,library,auditorium,medical,classrooms,cafeteria,transport,banks,cafeteria,classrooms,medical,sports,auditorium,comp labs,sports,medical,library,auditorium,hostel,canteen,medical,hostel,gym,sports,cafeteria,auditorium,library,laboratory,comp labs,laboratory,library,gym,sports,medical,auditorium,comp labs,hostel,cafeteria,comp labs,cafeteria,library,auditorium,laboratory,hostel,gym,sports,medical,laboratory,library,gym,sports,auditorium,medical,hostel,comp labs,cafeteria,classrooms,e-classroom,banks,library,laboratory,cafeteria,comp labs,sports,gym,auditorium,medical,hostel,library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,transport,gym,laboratory,library,sports,hostel,cafeteria,comp labs,medical,auditorium,comp labs,laboratory,library,hostel,cafeteria,canteen,comp labs,gym,library,laboratory,cafeteria,library,cafeteria,comp labs,sports,laboratory,auditorium,comp labs,medical,cafeteria,library,auditorium,canteen,gym,comp labs,sports,medical,cafeteria,laboratory,library,auditorium,e-classroom,transport,sports,medical,library,auditorium,hostel,banks,laboratory,transport,hostel,medical,sports,cafeteria,gym,library,laboratory,comp labs,auditorium,comp labs,medical,cafeteria,library,auditorium,hostel,gym,laboratory,sports,transport,laboratory,library,medical,hostel,classrooms"
      },
      {
        "name": "Abasaheb Marathe Arts and New Commerce Science College",
        "year_founded": 1994,
        "state": "Maharashtra",
        "city": "Ratnagiri",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Abdul Aziz Ansari Degree College",
        "year_founded": 1996,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory,gym"
      },
      {
        "name": "Abdul Razak Degree College - [ARDC]",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Jyotiba Phule Nagar",
        "facilities": "hostel,medical,sports,cafeteria,laboratory,comp labs,auditorium,library"
      },
      {
        "name": "Abeda Inamdar Senior College",
        "year_founded": 1991,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,cafeteria,library,auditorium,hostel,sports,comp labs,gym,laboratory"
      },
      {
        "name": "Achariya Arts and  Science College",
        "year_founded": 2004,
        "state": "Puducherry",
        "city": "Pondicherry",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Acharya Brojendra Nath Seal College",
        "year_founded": 1888,
        "state": "West Bengal",
        "city": "Cooch Behar",
        "facilities": "sports,medical,hostel,cafeteria,gym,auditorium,comp labs,library,laboratory,security,classrooms"
      },
      {
        "name": "Acharya Girish Chandra Bose College - [AGCBC]",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,laboratory,library,comp labs,auditorium,classrooms"
      },
      {
        "name": "Acharya Institute of Graduate Studies - [AIGS]",
        "year_founded": 2005,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,security"
      },
      {
        "name": "Acharya Jagadish Chandra Bose College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,hostel,comp labs,classrooms"
      },
      {
        "name": "Acharya Prafulla Chandra College - [APCC]",
        "year_founded": 1960,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,sports,auditorium,hostel,canteen"
      },
      {
        "name": "Acharya Bangalore B-School - [ABBS]",
        "year_founded": 2008,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,hostel,classrooms"
      },
      {
        "name": "Achhruram Memorial College",
        "year_founded": 1975,
        "state": "West Bengal",
        "city": "Purulia",
        "facilities": "hostel,medical,gym,cafeteria,auditorium,sports,library,laboratory,comp labs"
      },
      {
        "name": "Adaikalamatha College - [AMC]",
        "year_founded": 1988,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "comp labs,auditorium,library,hostel,transport"
      },
      {
        "name": "Adarsh Degree College - [ADC]",
        "year_founded": 1971,
        "state": "Telangana",
        "city": "Mahabub Nagar",
        "facilities": "library,laboratory,sports,cafeteria,auditorium,hostel,comp labs,classrooms,security,medical"
      },
      {
        "name": "Adarsh Mahavidyalaya,Omerga",
        "year_founded": 1990,
        "state": "Maharashtra",
        "city": "Osmanabad",
        "facilities": "hostel,medical,gym,cafeteria,sports,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Adarsh Mahila Mahavidyalaya",
        "year_founded": 1970,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "hostel,medical,sports,comp labs,gym,cafeteria,library,laboratory,auditorium"
      },
      {
        "name": "Adhiparasakthi College of Arts and Sciences -[APCASGBN]",
        "year_founded": 1988,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "library,sports,canteen,transport,classrooms"
      },
      {
        "name": "Aditanar College of Arts and Science",
        "year_founded": 1965,
        "state": "Tamil Nadu",
        "city": "Thoothukudi",
        "facilities": "medical,cafeteria,library,auditorium,hostel,canteen"
      },
      {
        "name": "Aditi Mahavidyalaya - [AMV]",
        "year_founded": 1994,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Adoni Arts and Science College",
        "year_founded": 1962,
        "state": "Andhra Pradesh",
        "city": "Adoni",
        "facilities": "hostel,medical,cafeteria,library,laboratory,auditorium,comp labs,sports,classrooms,wi-fi campus"
      },
      {
        "name": "A.G & S.G Siddhartha Degree College of Arts and Science ",
        "year_founded": 1975,
        "state": "Andhra Pradesh",
        "city": "Krishna",
        "facilities": "hostel,medical,gym,auditorium,cafeteria,library,laboratory,sports,comp labs,classrooms,transport"
      },
      {
        "name": "Adv. Sitaram Babanbhau Anandramji Baheti Arts and Commerce College",
        "year_founded": 1983,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": "gym,sports,cafeteria,auditorium,laboratory,library,comp labs,security,classrooms"
      },
      {
        "name": "Aggarwal Junior College Wing II",
        "year_founded": 1971,
        "state": "Haryana",
        "city": "Faridabad",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,gym,hostel"
      },
      {
        "name": "Aggarwal College Wing III Coed & Self Finance",
        "year_founded": 1971,
        "state": "Haryana",
        "city": "Rohtak",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,gym"
      },
      {
        "name": "AghoreKamini Prakashchandra Mahavidyalaya",
        "year_founded": 1959,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "medical,cafeteria,auditorium,library,laboratory,sports,comp labs,classrooms"
      },
      {
        "name": "Agra College",
        "year_founded": 1823,
        "state": "Uttar Pradesh",
        "city": "Agra",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel,cafeteria,laboratory,classrooms,e-classroom"
      },
      {
        "name": "Aiman College of Arts and Science for Women - [AIMAN]",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "library,comp labs,hostel,classrooms,medical,auditorium"
      },
      {
        "name": "Aizawl Theological College-[ATC]",
        "year_founded": 1907,
        "state": "Mizoram",
        "city": "Aizawl",
        "facilities": "hostel,medical,gym,sports,cafeteria,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "Aizaz Rizvi College of Journalism and Mass Communication - [ARCJMC]",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,library,cafeteria,auditorium,hostel,laboratory,sports"
      },
      {
        "name": "Ajara Mahavidyalaya",
        "year_founded": 1982,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "hostel,medical,gym,cafeteria,auditorium,comp labs,library,laboratory,sports"
      },
      {
        "name": "Akarapu Sharath Chandrika Devi Memorial College for Women - [ASM]",
        "year_founded": 1975,
        "state": "Telangana",
        "city": "Warangal",
        "facilities": "hostel,medical,sports,laboratory,library,gym,comp labs,cafeteria,auditorium,classrooms,security"
      },
      {
        "name": "Akhand Anand Arts And Commerce College",
        "year_founded": 1992,
        "state": "Gujarat",
        "city": "Surat",
        "facilities": "hostel,medical,gym,sports,library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Akhilabhagya Mahavidyalya",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Gorakhpur",
        "facilities": "hostel,medical,sports,gym,cafeteria,auditorium,library,laboratory,comp labs"
      },
      {
        "name": "Akkineni Nageswara Rao College - [ANR]",
        "year_founded": 1950,
        "state": "Andhra Pradesh",
        "city": "Krishna",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,hostel,security,auditorium"
      },
      {
        "name": "Aklia Degree College",
        "year_founded": 2008,
        "state": "Punjab",
        "city": "Bathinda",
        "facilities": "library,laboratory,comp labs,canteen,medical"
      },
      {
        "name": "Al-Ameen College, Edathala",
        "year_founded": 1981,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "library,laboratory,comp labs,hostel,canteen,medical,transport,security,sports,classrooms,communication centre,auditorium,cafeteria,gym"
      },
      {
        "name": "Alankar P.G. Girls College",
        "year_founded": 2006,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,hostel,medical,gym"
      },
      {
        "name": "Alder College",
        "year_founded": 1992,
        "state": "Nagaland",
        "city": "Kohima",
        "facilities": "hostel,medical,gym,sports,auditorium,library,laboratory,cafeteria,comp labs"
      },
      {
        "name": "Alipurduar College",
        "year_founded": 1957,
        "state": "West Bengal",
        "city": "Alipurduar",
        "facilities": "hostel,library,cafeteria,auditorium,laboratory,comp labs,classrooms,sports,medical"
      },
      {
        "name": "All India Institute of Speech and Hearing - [AIISH]",
        "year_founded": 1966,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "hostel,laboratory,library,comp labs,gym,canteen,medical,classrooms,cafeteria,sports"
      },
      {
        "name": "Alphonsa College",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,hostel,canteen"
      },
      {
        "name": "Amal College of Advanced Studies, Nilambur",
        "year_founded": 2005,
        "state": "Kerala",
        "city": "Nilambur",
        "facilities": "laboratory,library,hostel,canteen,classrooms"
      },
      {
        "name": "Amar Singh Government Degree College",
        "year_founded": 1942,
        "state": "Jammu and Kashmir",
        "city": "Srinagar",
        "facilities": "hostel,medical,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Amardeep Singh Shergill Memorial College - [ASSM]",
        "year_founded": 1994,
        "state": "Punjab",
        "city": "Nawanshahr",
        "facilities": "library,comp labs,canteen,gym,laboratory,hostel,sports"
      },
      {
        "name": "Ambah Post Graduate College",
        "year_founded": 1959,
        "state": "Madhya Pradesh",
        "city": "Morena",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,medical,hostel,gym,auditorium"
      },
      {
        "name": "Amity Institute of English and Business Communication - [AIEBC]",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Noida",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,hostel,sports,gym"
      },
      {
        "name": "Amity Institute of Psychology and Allied Sciences - [AIPS]",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Noida",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,hostel,sports,gym"
      },
      {
        "name": "Amity School of Performing Arts",
        "year_founded": 1995,
        "state": "Uttar Pradesh",
        "city": "Noida",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,hostel,sports,gym"
      },
      {
        "name": "Amity School of Physical Studies and Sports Sciences",
        "year_founded": 1995,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,hostel,sports,gym"
      },
      {
        "name": "Amrapali Institute of Applied Sciences - [AIAS]",
        "year_founded": 1999,
        "state": "Uttarakhand",
        "city": "Nainital",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,comp labs,swimming pool,security"
      },
      {
        "name": "Amrita School of Arts and Sciences - [ASAS]",
        "year_founded": null,
        "state": "Kerala",
        "city": "Kochi",
        "facilities": "banks,wi-fi campus,transport,comp labs,classrooms,library,cafeteria,sports,hostel,canteen,medical,security"
      },
      {
        "name": "Amrita School of Arts and Sciences - [ASAS] Amritapuri",
        "year_founded": 2003,
        "state": "Kerala",
        "city": "Kollam",
        "facilities": "comp labs,sports,medical,laboratory,library,hostel,auditorium,gym,cafeteria,security"
      },
      {
        "name": "Anand Arts College - [AAC]",
        "year_founded": 1963,
        "state": "Gujarat",
        "city": "Anand",
        "facilities": "hostel,medical,sports,gym,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ananda Chandra College",
        "year_founded": 1942,
        "state": "West Bengal",
        "city": "Jalpaiguri",
        "facilities": "hostel,medical,gym,cafeteria,library,laboratory,auditorium,comp labs,sports,classrooms"
      },
      {
        "name": "Ananda College Devakottai",
        "year_founded": 2004,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "sports,library,wi-fi campus,laboratory,hostel"
      },
      {
        "name": "Ananda Mohan College - [AMC]",
        "year_founded": 1961,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,hostel,gym,cafeteria"
      },
      {
        "name": "Anandaram Dhekial Phookan College - [ADP]",
        "year_founded": 1959,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "library,cafeteria,sports,hostel,medical,comp labs"
      },
      {
        "name": "Anbu Arts and Science College",
        "year_founded": 2007,
        "state": "Tamil Nadu",
        "city": "Namakkal",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Anchalika Degree Mahavidyalaya",
        "year_founded": 1992,
        "state": "Orissa",
        "city": "Jagatsinghpur",
        "facilities": "medical,hostel,sports,gym,cafeteria,auditorium,library,laboratory,comp labs"
      },
      {
        "name": "Anderson Theological College - [ATC]",
        "year_founded": 1994,
        "state": "Nagaland",
        "city": "Zunhebotto",
        "facilities": "sports,hostel,cafeteria"
      },
      {
        "name": "Andhra Christian Theological College - [ACTC]",
        "year_founded": 1964,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "library"
      },
      {
        "name": "Andhra Loyola College - [ALC]",
        "year_founded": 1953,
        "state": "Andhra Pradesh",
        "city": "Vijayawada",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,hostel,e-classroom,communication centre"
      },
      {
        "name": "Andhra Mahila Sabha Arts and Science College for Women - [AMSASCW]",
        "year_founded": 1968,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "hostel,auditorium,comp labs,laboratory,library"
      },
      {
        "name": "Andhra Muslim College of Arts and Science",
        "year_founded": 1984,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "comp labs,sports,cafeteria,laboratory,library"
      },
      {
        "name": "Anglo Sanskrit College for Women - [ASCW]",
        "year_founded": 1973,
        "state": "Punjab",
        "city": "Khanna",
        "facilities": "comp labs,sports,laboratory,library,gym,cafeteria,hostel,medical,auditorium"
      },
      {
        "name": "Anjuman Arts & Commerce College",
        "year_founded": 1983,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "hostel,medical,gym,library,laboratory,cafeteria,auditorium,comp labs,sports"
      },
      {
        "name": "Anjuman-E-Islam’s Anjuman Arts, Science and Commerce College",
        "year_founded": 1972,
        "state": "Karnataka",
        "city": "Bijapur",
        "facilities": "hostel,medical,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Anjuman Arts Science and Commerce College & P.G. Centre",
        "year_founded": 1986,
        "state": "Karnataka",
        "city": "Dharwad",
        "facilities": "hostel,medical,gym,sports,library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Anjuman College for Women - [ACW]",
        "year_founded": 1995,
        "state": "Karnataka",
        "city": "Bhatkal",
        "facilities": "library,sports,laboratory,auditorium"
      },
      {
        "name": "Annabattuni Satyanarayana Degree College",
        "year_founded": 1988,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "library,laboratory"
      },
      {
        "name": "Annada College",
        "year_founded": 1979,
        "state": "Jharkhand",
        "city": "Hazaribagh",
        "facilities": "comp labs,laboratory,sports,canteen,cafeteria,classrooms,library,medical,auditorium"
      },
      {
        "name": "Annai College of Arts and Science - [ACAS]",
        "year_founded": 2001,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "comp labs,medical,cafeteria,laboratory,library"
      },
      {
        "name": "Annai Veilankanni College for Women",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Annai Violet Arts and Science College",
        "year_founded": 1997,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": ""
      },
      {
        "name": "PDEA's Annasaheb Magar College",
        "year_founded": 1941,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Annie Besant College of Engineering And Management - [ABCEM]",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,cafeteria,gym,hostel"
      },
      {
        "name": "Ansar Arabic College - [AAC]",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "comp labs,library,auditorium,cafeteria"
      },
      {
        "name": "Anugrah Memorial College - [AM]",
        "year_founded": 1964,
        "state": "Bihar",
        "city": "Gaya",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,classrooms,e-classroom,laboratory"
      },
      {
        "name": "Anugrah Narayan College - [ANC]",
        "year_founded": 1956,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Anugrah Narayan Singh College - [ANS] Barh",
        "year_founded": 1950,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "library,laboratory,medical,comp labs,auditorium,gym,sports,cafeteria,hostel"
      },
      {
        "name": "Apeejay Saraswati P.G. College for Girls",
        "year_founded": 1974,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,gym,hostel,cafeteria"
      },
      {
        "name": "Apex International College",
        "year_founded": 1996,
        "state": "Punjab",
        "city": "Amritsar",
        "facilities": "comp labs,sports,laboratory,library,gym,hostel,cafeteria,auditorium"
      },
      {
        "name": "Apollo Arts and Science College",
        "year_founded": 1999,
        "state": "Tamil Nadu",
        "city": "Kanchipuram",
        "facilities": "laboratory,comp labs,library,cafeteria,sports,hostel"
      },
      {
        "name": "Apoorva Degree College",
        "year_founded": 2001,
        "state": "Telangana",
        "city": "Karim Nagar",
        "facilities": "hostel,comp labs,laboratory,cafeteria,library,auditorium,sports,medical"
      },
      {
        "name": "Arambagh Girls College, Arambagh",
        "year_founded": 1995,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "comp labs,laboratory,hostel,cafeteria,medical,auditorium,sports,library,classrooms"
      },
      {
        "name": "Arcot Sri Mahalakshmi Women's College of Education - [ASMWCOE]",
        "year_founded": 2005,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "comp labs,library,sports,medical,gym,hostel,laboratory,classrooms,cafeteria,auditorium"
      },
      {
        "name": "Arignar Anna Government Arts College",
        "year_founded": 1967,
        "state": "Tamil Nadu",
        "city": "Cheyyur",
        "facilities": "library,sports,classrooms,transport,comp labs"
      },
      {
        "name": "Arihant College of Arts, Commerce & Science - [ACACS]",
        "year_founded": 2005,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "classrooms,comp labs,auditorium,library,laboratory,cafeteria"
      },
      {
        "name": "Arjunganj Vidya Mandir Degree College",
        "year_founded": 1986,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,sports,cafeteria,library,auditorium"
      },
      {
        "name": "Arts and Commerce College",
        "year_founded": 1994,
        "state": "Maharashtra",
        "city": "Hingoli",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Arts and Commerce College",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Solapur",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Arts Commerce and Science College",
        "year_founded": null,
        "state": "Gujarat",
        "city": "Surat",
        "facilities": "cafeteria,comp labs,medical,sports,hostel,library,laboratory,gym,auditorium"
      },
      {
        "name": "Arts Commerce and Science College",
        "year_founded": 1991,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Arts Science and Commerce College",
        "year_founded": 1968,
        "state": "Maharashtra",
        "city": "Sangli",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Arul Anandar College - [AAC]",
        "year_founded": 1970,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "canteen,library,hostel,medical,comp labs,auditorium"
      },
      {
        "name": "Arumugam Pillai Seethai Ammal College - [APSA]",
        "year_founded": 1965,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "medical,cafeteria,library,auditorium,laboratory,comp labs,sports"
      },
      {
        "name": "Dr. Arvind B. Telang Senior College of Arts, Science and Commerce",
        "year_founded": 1998,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "library,laboratory,gym,hostel,medical,cafeteria,comp labs,auditorium,sports"
      },
      {
        "name": "Arya College",
        "year_founded": 1946,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym,communication centre"
      },
      {
        "name": "Arya Girls College",
        "year_founded": 1959,
        "state": "Haryana",
        "city": "Ambala",
        "facilities": "library,hostel,cafeteria,sports,medical"
      },
      {
        "name": "Arya Kanya Degree College",
        "year_founded": 1970,
        "state": "Uttar Pradesh",
        "city": "Hardoi",
        "facilities": "comp labs,sports,library,auditorium"
      },
      {
        "name": "Arya Kanya Pathshala Post Graduate College - [AKP]",
        "year_founded": 1966,
        "state": "Uttar Pradesh",
        "city": "Sitapur",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Arya Post Graduate College",
        "year_founded": 1954,
        "state": "Haryana",
        "city": "Panipat",
        "facilities": "comp labs,library,auditorium,hostel,medical,laboratory,sports"
      },
      {
        "name": "Arya Vidyapeeth College - [AVC]",
        "year_founded": 1958,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "library,cafeteria,sports,medical,comp labs"
      },
      {
        "name": "Aryabhatta B-School",
        "year_founded": 2009,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": ""
      },
      {
        "name": "Asan Memorial College of Arts and Science - [AMCAS]",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,comp labs,gym"
      },
      {
        "name": "Asannagar Madan Mohan Tarkalankar College - [AMMTC]",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Asansol Girls College - [AGC]",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "Bundwan",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,hostel,classrooms,cafeteria"
      },
      {
        "name": "Aska Science College",
        "year_founded": 1968,
        "state": "Orissa",
        "city": "Aska",
        "facilities": "comp labs,sports,laboratory,library,auditorium,hostel,classrooms,medical,cafeteria"
      },
      {
        "name": "Assumption College",
        "year_founded": 1949,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,auditorium,hostel"
      },
      {
        "name": "Asutosh College",
        "year_founded": 1916,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,hostel,comp labs"
      },
      {
        "name": "Atibal Singh Mahavidyalaya",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "comp labs,laboratory,library,cafeteria,medical,auditorium,sports,classrooms"
      },
      {
        "name": "Atma Ram Sanatan Dharma College - [ARSD]",
        "year_founded": 1959,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Shrimant Babasaheb Deshmukh Mahavidyalaya,Atpadi",
        "year_founded": 1969,
        "state": "Maharashtra",
        "city": "Sangli",
        "facilities": "gym,hostel,comp labs,laboratory,medical,sports,cafeteria,auditorium,library"
      },
      {
        "name": "Aurora's Degree College",
        "year_founded": 1989,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "classrooms,security,cafeteria,auditorium,medical,sports,laboratory,library,comp labs,hostel"
      },
      {
        "name": "Aurora's Engineering College - [AEC]",
        "year_founded": 1998,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,transport"
      },
      {
        "name": "Auxilium College",
        "year_founded": 1954,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "sports,transport,library,classrooms,hostel,comp labs,laboratory,auditorium"
      },
      {
        "name": "Avanthi Degree & P.G. College",
        "year_founded": 1992,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,gym,sports"
      },
      {
        "name": "Avanthi's Scientific Technological & Research Academy - [ASRA]",
        "year_founded": 2008,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,transport,e-classroom,wi-fi campus"
      },
      {
        "name": "Avvaiyar Government College for Women - [AGCW]",
        "year_founded": 1972,
        "state": "Tamil Nadu",
        "city": "Kodaikanal",
        "facilities": "gym,hostel,comp labs,laboratory,sports,library,cafeteria,auditorium,medical"
      },
      {
        "name": "Avadh Girls Degree College - [AGDC]",
        "year_founded": 1958,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "gym,hostel,cafeteria,medical,comp labs,laboratory,auditorium,library,sports"
      },
      {
        "name": "Awadhoot Bhagwan Ram PG College - [ABRPGC]",
        "year_founded": 1990,
        "state": "Uttar Pradesh",
        "city": "Sonbhadra",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory"
      },
      {
        "name": "Ayodhya Prasad Memorial Degree College - [APMDc]",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Badaun",
        "facilities": "gym,hostel,comp labs,laboratory,library,cafeteria,auditorium,sports,medical"
      },
      {
        "name": "Ayya Nadar Janaki Ammal College - [ANJA]",
        "year_founded": 1963,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "cafeteria,laboratory,library,auditorium,comp labs,sports,gym,medical,hostel"
      },
      {
        "name": "Ayyan Thiruvalluvar College of Arts and Science - [ATCAS]",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Ariyalur",
        "facilities": "library,comp labs,hostel,sports"
      },
      {
        "name": "Azad Hind Fouz Smriti Mahavidyalaya",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "gym,sports,cafeteria,auditorium,classrooms"
      },
      {
        "name": "Baosi Banikanta Kakati College - [BBK]",
        "year_founded": 1971,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "gym,hostel,cafeteria,comp labs,laboratory,sports,auditorium,library,medical"
      },
      {
        "name": "BBK DAV College for Women",
        "year_founded": 1967,
        "state": "Punjab",
        "city": "Amritsar",
        "facilities": "sports,medical,cafeteria,library,auditorium,gym,comp labs,laboratory,hostel"
      },
      {
        "name": "B. Borooah College",
        "year_founded": 1943,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "gym,comp labs,laboratory,library,hostel,cafeteria,medical,auditorium,sports"
      },
      {
        "name": "B.D. Arts College for Women",
        "year_founded": 1956,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "gym,hostel,comp labs,laboratory,cafeteria,sports,library,auditorium,medical"
      },
      {
        "name": "B.D. Kale Mahavidyalaya Ghodegaon",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "gym,hostel,sports,cafeteria,comp labs,laboratory,auditorium,library,medical"
      },
      {
        "name": "BES  Degree College Jayanagar",
        "year_founded": 1972,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "BESM Arts & Commerce College Byadgi",
        "year_founded": 1984,
        "state": "Karnataka",
        "city": "Haveri",
        "facilities": "gym,hostel,cafeteria,comp labs,laboratory,library,sports,auditorium,medical"
      },
      {
        "name": "BH College",
        "year_founded": 1966,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "gym,comp labs,laboratory,library,auditorium,cafeteria,medical,sports,hostel"
      },
      {
        "name": "BL Jindal Suiwala College",
        "year_founded": 1995,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "comp labs,library,sports,medical,laboratory,cafeteria"
      },
      {
        "name": "BLDE Association's Commerce, BHS Arts & TGP Science College Jamkhandi",
        "year_founded": 1963,
        "state": "Karnataka",
        "city": "Bagalkot",
        "facilities": "sports,medical,auditorium,hostel,gym,comp labs,library"
      },
      {
        "name": "BM Ruia Girls College ",
        "year_founded": 1958,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "B.M.D. College",
        "year_founded": 1968,
        "state": "Bihar",
        "city": "Vaishali",
        "facilities": "hostel,comp labs,laboratory,cafeteria,medical,library,auditorium,sports,classrooms"
      },
      {
        "name": "BMS College for Women - [BMSCW]",
        "year_founded": 1964,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "sports,gym,medical,cafeteria,library,auditorium,hostel,comp labs,laboratory,classrooms,banks,transport,communication centre"
      },
      {
        "name": "B.N. Post Graduate College - [BNPGC]",
        "year_founded": 1978,
        "state": "Rajasthan",
        "city": "Udaipur",
        "facilities": "comp labs,cafeteria,library,auditorium,laboratory,hostel,gym,sports,medical,swimming pool"
      },
      {
        "name": "B. N. K. B. P. G. College",
        "year_founded": 1994,
        "state": "Uttar Pradesh",
        "city": "Ambedkar Nagar",
        "facilities": "comp labs,sports,medical,cafeteria,library,laboratory,auditorium,gym,hostel"
      },
      {
        "name": "B. P. Arts, SMA Science, KKC Commerce College",
        "year_founded": null,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": "sports,gym,library,hostel,canteen"
      },
      {
        "name": "BP Baria Science Institute",
        "year_founded": 1946,
        "state": "Gujarat",
        "city": "Navsari",
        "facilities": "library"
      },
      {
        "name": "Bimala Prasad Chaliha College",
        "year_founded": 1972,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "gym,hostel,cafeteria,comp labs,laboratory,sports,auditorium,library,medical"
      },
      {
        "name": "Biju Pattnaik College of Science & Education - [BPCSE]",
        "year_founded": 1984,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,laboratory,sports"
      },
      {
        "name": "B.Padmanaban Jayanthimala College of Arts and Science",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Cuddalore",
        "facilities": "laboratory,comp labs,library,transport,classrooms,sports"
      },
      {
        "name": "B.R. Tambakad Arts Commerce and Science First Grade College",
        "year_founded": 1992,
        "state": "Karnataka",
        "city": "Haveri",
        "facilities": "gym,hostel,sports,comp labs,laboratory,library,auditorium,medical,cafeteria"
      },
      {
        "name": "B.S.K. College, Barharwa",
        "year_founded": 1978,
        "state": "Jharkhand",
        "city": "Hazaribagh",
        "facilities": "comp labs,cafeteria,sports,transport,laboratory,auditorium,library,classrooms"
      },
      {
        "name": " B.V. Bhoomareddi College of Arts, Science and Commerce",
        "year_founded": 1960,
        "state": "Karnataka",
        "city": "Bidar",
        "facilities": "comp labs,sports,cafeteria,library,laboratory,classrooms"
      },
      {
        "name": "BWDA Arts and Science College",
        "year_founded": 2008,
        "state": "Tamil Nadu",
        "city": "Villupuram",
        "facilities": "laboratory,library,sports,canteen,classrooms,auditorium"
      },
      {
        "name": "Baba Baijnath Degree College - [BBDC]",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "library,cafeteria,hostel,comp labs,sports"
      },
      {
        "name": "Baba Balak Nath Post Graduate College - [BBNPG]",
        "year_founded": 1984,
        "state": "Himachal Pradesh",
        "city": "Hamirpur",
        "facilities": "library,laboratory,sports,canteen,hostel"
      },
      {
        "name": "Baba Bariyar Shah Mahavidyalaya - [BBSM]",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Baba Baruadas PG College",
        "year_founded": 2000,
        "state": "Uttar Pradesh",
        "city": "Ambedkar Nagar",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,laboratory,hostel,gym,medical"
      },
      {
        "name": "Baba Farid College - [BFC]",
        "year_founded": 2005,
        "state": "Punjab",
        "city": "Bathinda",
        "facilities": "library,laboratory,hostel,cafeteria,canteen,gym,transport,comp labs,medical"
      },
      {
        "name": "Baba Gajadhar Das Balika Post Graduate College",
        "year_founded": 1991,
        "state": "Uttar Pradesh",
        "city": "Ghazipur",
        "facilities": "comp labs,sports,medical,auditorium,hostel,cafeteria,library"
      },
      {
        "name": "Baba Mehar Singh Memorial College - [BMSM]",
        "year_founded": 2004,
        "state": "Punjab",
        "city": "Gurdaspur",
        "facilities": "hostel,library,comp labs,cafeteria,sports"
      },
      {
        "name": "Baba Vishwanath Mahavidyalaya",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Azamgarh",
        "facilities": "library,comp labs,sports,auditorium,cafeteria,laboratory,hostel"
      },
      {
        "name": "Baba Zoravar Singh Fateh Singh Khalsa Girls College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Ropar",
        "facilities": "comp labs,library,canteen,hostel,sports,medical,communication centre,classrooms,transport"
      },
      {
        "name": "Babbar Akali Memorial Khalsa College - [BAM]",
        "year_founded": 1969,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "gym,hostel,comp labs,laboratory,library,sports,auditorium,medical,cafeteria,canteen,classrooms"
      },
      {
        "name": "Babu Gulab Singh Gaharwar Degree College",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Mirzapur",
        "facilities": "classrooms,library,sports,canteen,communication centre,cafeteria"
      },
      {
        "name": "Babu Hari Ram Singh Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "library,sports,classrooms,comp labs,laboratory,cafeteria,auditorium"
      },
      {
        "name": "Babu Ram Pal Singh Mahavidyalya",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,laboratory,sports,auditorium,comp labs,cafeteria"
      },
      {
        "name": "Babu Ram Singh Mahavidyalaya",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Sonbhadra",
        "facilities": "gym,comp labs,laboratory,library,cafeteria,auditorium,sports,hostel,medical"
      },
      {
        "name": "Baburam Mohanlal Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Auraiya",
        "facilities": "gym,laboratory,library,comp labs,cafeteria,auditorium,sports,hostel,medical"
      },
      {
        "name": "Baburam Rukmani Devi Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "sports,library,laboratory,cafeteria,comp labs,auditorium,hostel"
      },
      {
        "name": "Baburao Patil College of Arts and Science",
        "year_founded": 1967,
        "state": "Maharashtra",
        "city": "Solapur",
        "facilities": "library,laboratory,sports,cafeteria,auditorium,comp labs,hostel"
      },
      {
        "name": "Baburaoji Gholap College Sangvi",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,gym,cafeteria,library,laboratory,sports,auditorium,hostel"
      },
      {
        "name": "Badri Vishal PG College",
        "year_founded": 1960,
        "state": "Uttar Pradesh",
        "city": "Farrukhabad",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Badrinarayan Barwale Mahavidyalaya",
        "year_founded": 1993,
        "state": "Maharashtra",
        "city": "Jalna",
        "facilities": "laboratory,comp labs,auditorium,cafeteria,sports,library"
      },
      {
        "name": "Bagadhar Barahma Kishan College",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Baksa",
        "facilities": "classrooms,library,comp labs"
      },
      {
        "name": "Bagnan College",
        "year_founded": 1958,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "library,comp labs,gym,classrooms,laboratory,medical,auditorium,e-classroom,cafeteria,sports"
      },
      {
        "name": "Bahadur Chand Munjal College of Education",
        "year_founded": 1998,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "library,hostel,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Bahona College",
        "year_founded": 1966,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": "library,hostel,auditorium,comp labs,laboratory,gym"
      },
      {
        "name": "Baikunthi Devi Kanya Mahavidalaya",
        "year_founded": 1967,
        "state": "Uttar Pradesh",
        "city": "Agra",
        "facilities": "library,sports,hostel,canteen"
      },
      {
        "name": "Baiswara P.G. College",
        "year_founded": 1966,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "hostel,laboratory,library,sports"
      },
      {
        "name": "Bajali College",
        "year_founded": 1955,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "library,gym,laboratory,hostel,canteen,comp labs"
      },
      {
        "name": "Baji Rout Memorial College",
        "year_founded": 1976,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,gym,sports,comp labs,laboratory"
      },
      {
        "name": "Bajkul Milani Mahavidyalaya",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "library,hostel,gym,sports,cafeteria,medical,laboratory,auditorium"
      },
      {
        "name": "Balagarh Bijoy Krishna Mahavidyalaya",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "library,laboratory,sports,medical,classrooms,comp labs,auditorium,cafeteria,security"
      },
      {
        "name": "Balaji College of Arts, Commerce and Science - [BCACS]",
        "year_founded": 1973,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,sports,gym,medical,laboratory,library,auditorium,hostel,cafeteria"
      },
      {
        "name": "Balbhim Arts Science and Commerce College",
        "year_founded": 1960,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "hostel,medical,gym,sports,cafeteria,library,laboratory,auditorium,comp labs,classrooms"
      },
      {
        "name": "Balurghat College",
        "year_founded": 1948,
        "state": "West Bengal",
        "city": "Dakshin Dinajpur",
        "facilities": "hostel,e-classroom,classrooms,library,transport,sports,comp labs,laboratory,cafeteria"
      },
      {
        "name": "Balurghat Mahila Mahavidyalaya",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Dakshin Dinajpur",
        "facilities": "library,comp labs,canteen,auditorium,sports,hostel,classrooms"
      },
      {
        "name": "Balwant College",
        "year_founded": 1963,
        "state": "Maharashtra",
        "city": "Sangli",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Balwant Vidyapeeth Rural Institute - [BVRI]",
        "year_founded": 1956,
        "state": "Uttar Pradesh",
        "city": "Agra",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,classrooms,medical,hostel"
      },
      {
        "name": "Banarsi Dass Arya Girls College",
        "year_founded": 1964,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "hostel,medical,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Bangabasi College",
        "year_founded": 1887,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,gym,comp labs,classrooms"
      },
      {
        "name": "Bangalore City College - [BCC]",
        "year_founded": 1999,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym"
      },
      {
        "name": "DES's Bangurnagar Arts, Science and Commerce College - [BNDC] Dandeli",
        "year_founded": 1974,
        "state": "Karnataka",
        "city": "Kannada",
        "facilities": "hostel,medical,sports,gym,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Banipur Mahila Mahavidyalaya",
        "year_founded": 1999,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "library,sports,medical,comp labs,classrooms"
      },
      {
        "name": "Bankim Sardar College",
        "year_founded": 1955,
        "state": "West Bengal",
        "city": "South 24 Parganas",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Bankura Christian College - [BCC]",
        "year_founded": 1903,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "library,hostel,sports,comp labs,laboratory,auditorium,canteen,medical"
      },
      {
        "name": "Bankura Zilla Saradamani Mahila Mahavidyapith",
        "year_founded": 1973,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Banwarilal Bhalotia College",
        "year_founded": 1944,
        "state": "West Bengal",
        "city": "Asansol",
        "facilities": "hostel,library,laboratory,canteen,sports,auditorium,classrooms"
      },
      {
        "name": "Bapu Mahavidyalaya",
        "year_founded": 1991,
        "state": "Uttar Pradesh",
        "city": "Ghazipur",
        "facilities": "library,laboratory,hostel"
      },
      {
        "name": "Bapujee College",
        "year_founded": 1970,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "library,laboratory,medical,sports,canteen"
      },
      {
        "name": "Bapujee College",
        "year_founded": 1977,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,laboratory,hostel,gym,canteen,medical"
      },
      {
        "name": "Barasat College",
        "year_founded": 1972,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,canteen,medical,classrooms"
      },
      {
        "name": "Barasat Government College",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "medical,sports,library,laboratory,cafeteria,comp labs,hostel,classrooms,auditorium"
      },
      {
        "name": "Bareilly College",
        "year_founded": 1837,
        "state": "Uttar Pradesh",
        "city": "Bareilly",
        "facilities": "sports,medical,library,auditorium,hostel,banks,communication centre,cafeteria,e-classroom,gym"
      },
      {
        "name": "Baring Union Christian College - [BUCC]",
        "year_founded": 1978,
        "state": "Punjab",
        "city": "Batala",
        "facilities": "comp labs,sports,laboratory,library"
      },
      {
        "name": "Barpeta Girls College",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "hostel,library,canteen,transport,medical"
      },
      {
        "name": "Barrackpore Rastraguru Surendranath College - [BRSNC]",
        "year_founded": 1953,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "medical,auditorium,sports,comp labs,library,laboratory,classrooms,hostel,cafeteria"
      },
      {
        "name": "Baruipur College",
        "year_founded": 1981,
        "state": "West Bengal",
        "city": "South 24 Parganas",
        "facilities": "sports,medical,cafeteria,laboratory,library,comp labs,auditorium,classrooms"
      },
      {
        "name": "Basanti Devi College",
        "year_founded": 1959,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,comp labs,laboratory,medical,auditorium,classrooms,cafeteria,sports"
      },
      {
        "name": "Basanti Devi Degree College",
        "year_founded": 2002,
        "state": "Uttar Pradesh",
        "city": "Bulandshahr",
        "facilities": "comp labs,sports,cafeteria,laboratory,library"
      },
      {
        "name": "Basaveshwara College of Commerce, Arts & Science",
        "year_founded": 1982,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Baselios Poulose ll Catholicos College - [BPC]",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "library,laboratory,gym,cafeteria,sports,comp labs,auditorium,medical,hostel"
      },
      {
        "name": "Baselius College",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Basirhat College",
        "year_founded": 1957,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "hostel,library,canteen,auditorium,medical,cafeteria,classrooms,sports,comp labs"
      },
      {
        "name": "Basudev Somani College",
        "year_founded": 1978,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "comp labs,medical,cafeteria,library,auditorium,hostel,sports"
      },
      {
        "name": "Behala College",
        "year_founded": 1963,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,medical,classrooms"
      },
      {
        "name": "Bejoy Narayan Mahavidyalaya",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "comp labs,medical,library,laboratory,canteen,auditorium,hostel,sports,classrooms"
      },
      {
        "name": "Belda College",
        "year_founded": 1963,
        "state": "West Bengal",
        "city": "Belda",
        "facilities": "comp labs,auditorium,medical,gym,cafeteria,library,sports,classrooms"
      },
      {
        "name": "Bengaluru School of Arts and Photography",
        "year_founded": null,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "classrooms,laboratory"
      },
      {
        "name": "Bengtol College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "hostel,library,auditorium,sports,medical,canteen,laboratory,comp labs"
      },
      {
        "name": "Berhampore Girls College",
        "year_founded": 1946,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "hostel,sports,library,comp labs,medical,auditorium,canteen,classrooms"
      },
      {
        "name": "Besant Evening College",
        "year_founded": 1976,
        "state": "Karnataka",
        "city": "Mangalore",
        "facilities": "sports,comp labs,medical,auditorium,library,security,cafeteria,classrooms,laboratory,hostel,gym"
      },
      {
        "name": "Besant Theosophical College",
        "year_founded": 1915,
        "state": "Andhra Pradesh",
        "city": "Chittoor",
        "facilities": "library,laboratory,gym,cafeteria,sports,comp labs,auditorium,medical,hostel,classrooms,security"
      },
      {
        "name": "Bethuadahari College",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "library,laboratory,comp labs,canteen,auditorium,medical"
      },
      {
        "name": "Bethune College",
        "year_founded": 1879,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,library,auditorium,laboratory,gym,comp labs"
      },
      {
        "name": "Beynon Smith Methodist Degree College of Arts",
        "year_founded": 1992,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "comp labs,canteen,auditorium,medical,classrooms,library"
      },
      {
        "name": "Bhadrak Autonomous College",
        "year_founded": 1948,
        "state": "Orissa",
        "city": "Bhadrak",
        "facilities": "auditorium,medical,library,comp labs,hostel,classrooms,security,cafeteria,laboratory,sports"
      },
      {
        "name": "Bhadwar Vidya Mandir PG College",
        "year_founded": 1942,
        "state": "Uttar Pradesh",
        "city": "Agra",
        "facilities": "comp labs,medical,cafeteria,laboratory,library"
      },
      {
        "name": "Bhag Singh Hayer Khalsa College for Women - [BSHKC]",
        "year_founded": 2001,
        "state": "Punjab",
        "city": "Abohar",
        "facilities": "comp labs,cafeteria,library,hostel,canteen,auditorium"
      },
      {
        "name": "Bhagini Nivedita College",
        "year_founded": 1993,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium"
      },
      {
        "name": "Bhai Nagahia Singh Memorial Girls College",
        "year_founded": 1995,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,gym,medical,laboratory,library,auditorium"
      },
      {
        "name": "Bhairab Ganguly College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,auditorium,library,comp labs,classrooms,laboratory,cafeteria,wi-fi campus"
      },
      {
        "name": "Bhakthavatsalam Memorial College for Women",
        "year_founded": 1993,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "library,laboratory,comp labs,cafeteria,sports,auditorium,hostel,medical,gym"
      },
      {
        "name": "Bhandarkars Arts and Science College",
        "year_founded": 1963,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "library,hostel,canteen,auditorium,comp labs,library,gym,sports,laboratory,classrooms,medical"
      },
      {
        "name": "Bhangar Mahavidyalaya",
        "year_founded": 1996,
        "state": "West Bengal",
        "city": "South 24 Parganas",
        "facilities": "comp labs,sports,medical,cafeteria,library,classrooms"
      },
      {
        "name": "Bharata Mata College - [BMC]",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Kochi",
        "facilities": "medical,auditorium,library,comp labs,hostel,canteen,banks,gym"
      },
      {
        "name": "Bharath College of Science and Management",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "library,hostel,transport,laboratory,comp labs,classrooms,sports,gym"
      },
      {
        "name": "Bharath Post Graduate College",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": ""
      },
      {
        "name": "Bharathidasan College of Arts and Science - [BCAS]",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Erode",
        "facilities": "cafeteria,comp labs,laboratory,library,hostel,medical,auditorium,sports"
      },
      {
        "name": "Bharathidasan Government College for Women - [BGCW]",
        "year_founded": 1968,
        "state": "Puducherry",
        "city": "Pondicherry",
        "facilities": "comp labs,laboratory,library,hostel,medical,auditorium,sports,cafeteria"
      },
      {
        "name": "Bharathiyar Arts and Science College for Women - [BASCW]",
        "year_founded": 1997,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "comp labs,comp labs,library,cafeteria,hostel,medical,auditorium,sports,transport"
      },
      {
        "name": "Bharati College",
        "year_founded": 1971,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Bharatiya Jain Sanghatana's Arts, Science and Commerce college",
        "year_founded": 1995,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "hostel,medical,auditorium,comp labs,library,gym"
      },
      {
        "name": "Bharatratna Dr Babasaheb Ambedkar Mahavidyalaya",
        "year_founded": 1983,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Bhartiya College of Education",
        "year_founded": 2003,
        "state": "Jammu and Kashmir",
        "city": "Udhampur",
        "facilities": "library,hostel,comp labs,sports,laboratory,medical,cafeteria,auditorium"
      },
      {
        "name": "Bhaskar Degree College",
        "year_founded": 1998,
        "state": "Andhra Pradesh",
        "city": "Vizianagaram",
        "facilities": "library,comp labs,laboratory,cafeteria,sports,medical,auditorium,classrooms"
      },
      {
        "name": "Bhaskaracharya College of Applied Sciences",
        "year_founded": 1995,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Bhatter College",
        "year_founded": 1963,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "classrooms,library,laboratory,hostel,auditorium,comp labs,e-classroom,gym,medical,sports"
      },
      {
        "name": "Bhavan's College",
        "year_founded": 1946,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,comp labs,library,laboratory,auditorium,cafeteria,hostel,medical,sports,transport"
      },
      {
        "name": "Bhawani Prasad Pandey PG College",
        "year_founded": 2002,
        "state": "Uttar Pradesh",
        "city": "Gorakhpur",
        "facilities": "library,sports,cafeteria,hostel,library,comp labs,laboratory,classrooms"
      },
      {
        "name": "Bhawanipur Anchalik College",
        "year_founded": 1982,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "library,cafeteria,comp labs,laboratory"
      },
      {
        "name": "Bhawanipur Hastinapur Bijni College - [BHB]",
        "year_founded": 1971,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "library,comp labs,laboratory,hostel,cafeteria"
      },
      {
        "name": "Bhilai Mahila Mahavidyalaya",
        "year_founded": 1979,
        "state": "Chhattisgarh",
        "city": "Durg",
        "facilities": "library,laboratory,comp labs,cafeteria,sports,medical,hostel,auditorium,classrooms"
      },
      {
        "name": "Dr. Bhim Rao Ambedkar College",
        "year_founded": 1991,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,library,laboratory,auditorium,classrooms"
      },
      {
        "name": "Bhogawati Mahavidyalaya",
        "year_founded": 1971,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "library,comp labs,laboratory,auditorium,cafeteria,medical,hostel,transport,sports"
      },
      {
        "name": "Bhola Nath College",
        "year_founded": 1946,
        "state": "Assam",
        "city": "Dhubri",
        "facilities": "sports,cafeteria,laboratory,library,auditorium,comp labs,hostel,medical,transport"
      },
      {
        "name": "Bhola Prasad Singh College",
        "year_founded": 1969,
        "state": "Bihar",
        "city": "Gopalganj",
        "facilities": "library,medical,classrooms"
      },
      {
        "name": "Bhuwaneshwari Dayal College - [BDC] Mithapur",
        "year_founded": 1970,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "sports,cafeteria,medical,auditorium,hostel,library"
      },
      {
        "name": "Bhusawal Arts Science and PO Nahata Commerce College",
        "year_founded": 1963,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": "medical,hostel,gym,sports,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Bi Bi Raza Degree College for Women - [BBRDC]",
        "year_founded": 1977,
        "state": "Karnataka",
        "city": "Gulbarga",
        "facilities": "hostel,medical,gym,sports,laboratory,auditorium,library"
      },
      {
        "name": "Bidhan Chandra College Rishra",
        "year_founded": 1957,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "hostel,medical,sports,cafeteria,auditorium,library,laboratory,comp labs,classrooms"
      },
      {
        "name": "Bidhannagar College",
        "year_founded": 1984,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,cafeteria,comp labs,auditorium,sports,hostel,medical,classrooms"
      },
      {
        "name": "Bihar National College",
        "year_founded": 1889,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "sports,medical,cafeteria,library,auditorium,laboratory,comp labs,classrooms"
      },
      {
        "name": "Bihari Mahila Degree College",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "sports,cafeteria,laboratory,library,auditorium,medical,gym,comp labs,hostel"
      },
      {
        "name": "Bihpuria College",
        "year_founded": 1973,
        "state": "Assam",
        "city": "Lakhimpur",
        "facilities": "hostel,medical,gym,sports,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Bijoy Krishna Girls College - [BKGC]",
        "year_founded": 1947,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "comp labs,cafeteria,laboratory,auditorium,hostel,medical,library,sports,classrooms"
      },
      {
        "name": "Bikali College",
        "year_founded": 1982,
        "state": "Assam",
        "city": "Goalpara",
        "facilities": "medical,hostel,gym,sports,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Bindeshwar Singh College ",
        "year_founded": 1954,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "sports,cafeteria,library,auditorium,laboratory,comp labs,gym,hostel,medical"
      },
      {
        "name": "Bir Bikram Memorial College - [BBMC]",
        "year_founded": 1969,
        "state": "Tripura",
        "city": "Agartala",
        "facilities": "library,laboratory,gym,hostel,cafeteria,comp labs,sports,auditorium,medical"
      },
      {
        "name": "Biraja Mahila Mahavidyalaya",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Jajapur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,hostel,sports,auditorium,medical"
      },
      {
        "name": "Birbhum Mahavidyalaya",
        "year_founded": 1979,
        "state": "West Bengal",
        "city": "Birbhum",
        "facilities": "library,hostel,classrooms,security,laboratory,comp labs,cafeteria,auditorium,sports"
      },
      {
        "name": "Birjhora Kanya Mahavidyalaya",
        "year_founded": 1986,
        "state": "Assam",
        "city": "Bongaigaon",
        "facilities": "library,comp labs,laboratory,auditorium,cafeteria,hostel,medical,transport,sports"
      },
      {
        "name": "Birla College Of Arts Science & Commerce",
        "year_founded": 1972,
        "state": "Maharashtra",
        "city": "Thane",
        "facilities": "library,cafeteria,canteen,gym,auditorium,comp labs"
      },
      {
        "name": "Birpara College",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Alipurduar",
        "facilities": "library,sports,cafeteria,classrooms,security,auditorium,comp labs,laboratory,medical"
      },
      {
        "name": "Bishop Abraham Memorial College - [BAM]",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Pathanamthitta",
        "facilities": "library,comp labs,laboratory,cafeteria,hostel,auditorium,classrooms,sports"
      },
      {
        "name": "Bishop Chulaparambil Memorial College for Women - [BCM]",
        "year_founded": 1955,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,gym,classrooms,e-classroom,laboratory,comp labs"
      },
      {
        "name": "Bishop Cotton Womens Christian Law College - [BCWCLC]",
        "year_founded": 2002,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "library,comp labs,laboratory,auditorium,hostel,medical,sports,cafeteria"
      },
      {
        "name": "Bishop Heber College - [BHC]",
        "year_founded": 1966,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,hostel,medical"
      },
      {
        "name": "Bishop Kurialacherry College for Women",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,classrooms,comp labs"
      },
      {
        "name": "Bishop Moore College - [BMC]",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Mavelikara",
        "facilities": "library,laboratory,comp labs,auditorium,sports,cafeteria,classrooms,medical"
      },
      {
        "name": "Biswanath College",
        "year_founded": 1960,
        "state": "Assam",
        "city": "Sonitpur",
        "facilities": "library,laboratory,sports,hostel"
      },
      {
        "name": "Biyani College of Science and Management - [BCSM]",
        "year_founded": 2010,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,transport,classrooms,hostel,gym"
      },
      {
        "name": "Bongaigaon College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Bongaigaon",
        "facilities": "library,hostel,comp labs,auditorium,cafeteria,medical,sports"
      },
      {
        "name": "Brahmananda Keshab Chandra College - [BKCC]",
        "year_founded": 1956,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "hostel,medical,sports,gym,cafeteria,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "Brahmavart Post Graduate College - [BVPGC]",
        "year_founded": 1970,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "hostel,medical,sports,gym,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Brihan Maharashtra College of Commerce - [BMCC]",
        "year_founded": 1943,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Budge Budge College",
        "year_founded": 1971,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,gym,hostel"
      },
      {
        "name": "Buniadpur Mahavidyalaya",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Uttar Dinajpur",
        "facilities": "library,comp labs,hostel,cafeteria,laboratory,medical,gym,sports,auditorium,classrooms"
      },
      {
        "name": "Burdwan Raj College",
        "year_founded": 1881,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "library,laboratory,gym,auditorium,sports,hostel,cafeteria,comp labs,medical,security"
      },
      {
        "name": "C & SH Desai Arts and LKL Doshi Commerce College",
        "year_founded": 1969,
        "state": "Gujarat",
        "city": "Kheda",
        "facilities": "hostel,comp labs,auditorium,library,medical,laboratory,gym,cafeteria,sports"
      },
      {
        "name": "C Kandasami Naidu College for Men - [CKNC]",
        "year_founded": 1967,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,library,canteen,medical,auditorium,sports"
      },
      {
        "name": "CB Patel Arts College",
        "year_founded": 1948,
        "state": "Gujarat",
        "city": "Kheda",
        "facilities": "library,hostel,laboratory,auditorium,gym,cafeteria,sports,comp labs,medical"
      },
      {
        "name": "CBM College of Arts and Science",
        "year_founded": 1974,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "CES College of Arts and Commerce",
        "year_founded": 1987,
        "state": "Goa",
        "city": "Salcete",
        "facilities": "sports,gym,medical,library,classrooms,cafeteria,e-classroom,wi-fi campus,auditorium"
      },
      {
        "name": "CKM Arts and Science College",
        "year_founded": 1967,
        "state": "Telangana",
        "city": "Warangal",
        "facilities": "sports,medical,laboratory,library,auditorium,classrooms,security,wi-fi campus"
      },
      {
        "name": "CM Dubey Post Graduate College - [CMDPG]",
        "year_founded": 1956,
        "state": "Chhattisgarh",
        "city": "Bilaspur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "CMK National Post Graduate Girls College",
        "year_founded": 1970,
        "state": "Haryana",
        "city": "Sirsa",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,hostel,gym"
      },
      {
        "name": "Chowdhary Mahadev Prasad Degree College - [CMP College]",
        "year_founded": 1950,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "hostel,medical,gym,cafeteria,auditorium,sports,library,laboratory,comp labs"
      },
      {
        "name": "CMS College",
        "year_founded": 1817,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,laboratory,library,classrooms"
      },
      {
        "name": "Bishop Appasamy College of Arts and Science",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "hostel,medical,sports,gym,cafeteria,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "CU Shah Arts College",
        "year_founded": 1960,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,comp labs,laboratory,hostel,gym,medical,sports,cafeteria,auditorium"
      },
      {
        "name": "Cachar College",
        "year_founded": 1960,
        "state": "Assam",
        "city": "Silchar",
        "facilities": "library,comp labs,hostel,auditorium,gym,cafeteria,medical,sports,laboratory"
      },
      {
        "name": "Canara College",
        "year_founded": 1973,
        "state": "Karnataka",
        "city": "Mangalore",
        "facilities": "library,hostel,auditorium,medical,sports,cafeteria,comp labs,laboratory"
      },
      {
        "name": "Career College",
        "year_founded": 1970,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "laboratory,library,sports,hostel,auditorium,medical,comp labs,wi-fi campus"
      },
      {
        "name": "Carmel College for Women",
        "year_founded": 1964,
        "state": "Goa",
        "city": "Salcete",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,sports,classrooms,transport,hostel,wi-fi campus,gym"
      },
      {
        "name": "Catholicate College",
        "year_founded": 1952,
        "state": "Kerala",
        "city": "Pathanamthitta",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Cauvery College Gonikoppal",
        "year_founded": 1968,
        "state": "Karnataka",
        "city": "Kodagu",
        "facilities": "medical,library,auditorium,hostel,sports,cafeteria,laboratory,comp labs,wi-fi campus"
      },
      {
        "name": "Cauvery College for Women",
        "year_founded": 1984,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "comp labs,cafeteria,library,laboratory,gym,hostel,auditorium,sports,medical,classrooms,banks"
      },
      {
        "name": "Ch S D St Theresa's Atonomous College for Women",
        "year_founded": 1953,
        "state": "Andhra Pradesh",
        "city": "Eluru",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,security,banks,classrooms,laboratory"
      },
      {
        "name": "Chaiduar College",
        "year_founded": 1967,
        "state": "Assam",
        "city": "Sonitpur",
        "facilities": "library,comp labs,sports,medical,cafeteria,laboratory,auditorium"
      },
      {
        "name": "Chaitanya Postgraduate College",
        "year_founded": 1993,
        "state": "Telangana",
        "city": "Warangal",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Chakdaha College",
        "year_founded": 1972,
        "state": "West Bengal",
        "city": "Chakdaha",
        "facilities": "library,auditorium,cafeteria,laboratory,hostel,comp labs,medical,classrooms,e-classroom,wi-fi campus,banks"
      },
      {
        "name": "Chanakya Degree & PG College",
        "year_founded": 2004,
        "state": "Telangana",
        "city": "Karim Nagar",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Chanchal College",
        "year_founded": 1969,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "gym,hostel,cafeteria,comp labs,laboratory,library,auditorium,sports,medical"
      },
      {
        "name": "Chanda Kantaiah Memorial Arts And Science College",
        "year_founded": 1967,
        "state": "Telangana",
        "city": "Warangal",
        "facilities": "gym,hostel,comp labs,laboratory,library,auditorium,medical,cafeteria,sports"
      },
      {
        "name": "Chandernagore Goverment College",
        "year_founded": 1862,
        "state": "West Bengal",
        "city": "Chandannagar",
        "facilities": "sports,auditorium,hostel,comp labs,laboratory,medical,cafeteria,library"
      },
      {
        "name": "Chandidas Mahavidyalaya",
        "year_founded": 1972,
        "state": "West Bengal",
        "city": "Birbhum",
        "facilities": "hostel,cafeteria,comp labs,laboratory,library,auditorium,sports,medical,classrooms,security"
      },
      {
        "name": "Chandra Kamal Bezbaruah College - [CKB]",
        "year_founded": 1959,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": "library,laboratory,medical,sports,cafeteria,comp labs,gym,auditorium,hostel"
      },
      {
        "name": "Chandrakona Vidyasagar Mahavidyalaya",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,auditorium,hostel,sports,medical,classrooms"
      },
      {
        "name": "Changu Kana Thakur Arts, Commerce and Science College - [CKT]",
        "year_founded": 1997,
        "state": "Maharashtra",
        "city": "Raigarh",
        "facilities": "laboratory,library,comp labs,cafeteria,gym,sports,hostel,medical,auditorium,classrooms"
      },
      {
        "name": "Charuchandra College",
        "year_founded": 1947,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,comp labs,hostel,sports"
      },
      {
        "name": "Ipcowala Santram College Of Fine Arts",
        "year_founded": 1964,
        "state": "Gujarat",
        "city": "Vallabh Vidyanagar",
        "facilities": "hostel,medical,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Chatra College",
        "year_founded": 1961,
        "state": "Jharkhand",
        "city": "Chatra",
        "facilities": "hostel,medical,sports,laboratory,library,auditorium,comp labs,cafeteria,classrooms"
      },
      {
        "name": "Chaudhary Charan Singh Post Graduate College",
        "year_founded": 1983,
        "state": "Uttar Pradesh",
        "city": "Etawah",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory,gym"
      },
      {
        "name": "Chellammal Women College",
        "year_founded": 1971,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "gym,medical,sports,library,laboratory,auditorium,comp labs,cafeteria,hostel"
      },
      {
        "name": "Chembai Memorial Government Music College",
        "year_founded": 1957,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "classrooms,library,auditorium,cafeteria,comp labs,sports"
      },
      {
        "name": "Cherpulassery College of Science and Technology for Women - [CCST]",
        "year_founded": 2010,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "library,hostel,cafeteria,auditorium,medical,sports,comp labs"
      },
      {
        "name": "Chettinad College of Arts and Science",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "library,hostel,auditorium,comp labs,cafeteria,sports,medical"
      },
      {
        "name": "Chevalier T.Thomas Elizabeth College For Women - [CTTEWC]",
        "year_founded": 1985,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "communication centre,canteen,auditorium,library,classrooms"
      },
      {
        "name": "Chhatrapati Shahu Arts Commerce and Science College",
        "year_founded": 2004,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "library,comp labs"
      },
      {
        "name": "Chhatrapati Shivaji College",
        "year_founded": 1947,
        "state": "Maharashtra",
        "city": "Satara",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym"
      },
      {
        "name": "Chhotu Ram Kisan College - [CRKC]",
        "year_founded": 1972,
        "state": "Haryana",
        "city": "Jind",
        "facilities": "laboratory,comp labs,library,cafeteria"
      },
      {
        "name": "Chidambaram Pillai College of Women",
        "year_founded": 1999,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "library,sports,medical,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Chikiti Mahavidyalaya",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Ganjam",
        "facilities": "library,laboratory,comp labs,auditorium"
      },
      {
        "name": "Chikkaiah Naiacker College",
        "year_founded": 1954,
        "state": "Tamil Nadu",
        "city": "Erode",
        "facilities": "library,hostel,auditorium,sports,medical,cafeteria,comp labs"
      },
      {
        "name": "Chikkanna Government Arts College",
        "year_founded": 1966,
        "state": "Tamil Nadu",
        "city": "Tiruppur",
        "facilities": "library,hostel,auditorium,cafeteria,comp labs,sports,medical"
      },
      {
        "name": "Chitalo Mohavidyalaya",
        "year_founded": 1994,
        "state": "Orissa",
        "city": "Jajapur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,sports,auditorium,hostel"
      },
      {
        "name": "Chitrada College, Chitrada",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Mayurbhanj",
        "facilities": "sports,medical,library,laboratory,gym,comp labs,hostel,cafeteria,auditorium"
      },
      {
        "name": "Chitransh A.D.P.G. College",
        "year_founded": 1994,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel,laboratory"
      },
      {
        "name": "Chittaranjan College",
        "year_founded": 1967,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "cafeteria,library,comp labs,laboratory,gym,hostel,auditorium,medical,sports"
      },
      {
        "name": "Choice College of Arts & Commerce",
        "year_founded": 2007,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,hostel,laboratory,auditorium"
      },
      {
        "name": "Chaudhary Dilip Singh Girls College",
        "year_founded": 2004,
        "state": "Madhya Pradesh",
        "city": "Bhind",
        "facilities": "library,laboratory,cafeteria,sports,auditorium,comp labs,hostel,medical,transport"
      },
      {
        "name": "Choudwar College",
        "year_founded": 1968,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "library,auditorium,library,hostel,cafeteria,comp labs,sports"
      },
      {
        "name": "Christ Church College -[CCC]",
        "year_founded": 1866,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "comp labs,laboratory,library,cafeteria,hostel,sports,auditorium,medical"
      },
      {
        "name": "Christ College",
        "year_founded": 1998,
        "state": "Gujarat",
        "city": "Rajkot",
        "facilities": "library,laboratory,gym,cafeteria,sports,comp labs,auditorium,hostel,medical"
      },
      {
        "name": "Christ College",
        "year_founded": 2001,
        "state": "Chhattisgarh",
        "city": "Bastar",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,sports,medical,auditorium,hostel"
      },
      {
        "name": "Christ College Irinjalakuda",
        "year_founded": 1956,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "gym,sports,medical,library,laboratory,hostel,auditorium,comp labs,cafeteria"
      },
      {
        "name": "Christ College",
        "year_founded": 2007,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "laboratory,library,gym,sports,comp labs,cafeteria,auditorium,hostel,medical"
      },
      {
        "name": "Christhu Raj College",
        "year_founded": 1997,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "library,laboratory,gym,cafeteria,sports,comp labs,auditorium,medical,hostel"
      },
      {
        "name": "Christian College",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Chengannur",
        "facilities": "hostel,medical,sports,cafeteria,comp labs,auditorium,library,laboratory"
      },
      {
        "name": "Sri Chundi Ranganayakulu Engineering College - [SCREC]",
        "year_founded": 1999,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "library,laboratory,gym,hostel,cafeteria,comp labs,sports,auditorium,medical,classrooms,security,transport"
      },
      {
        "name": "City Public Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Farrukhabad",
        "facilities": "sports,laboratory,library,auditorium,cafeteria,hostel,comp labs"
      },
      {
        "name": "Co-operative Arts & Science College, Madayi",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "library,cafeteria,comp labs,laboratory,auditorium,sports,medical"
      },
      {
        "name": "College of Commerce, Arts & Science",
        "year_founded": 1949,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "College of Computer Sciences",
        "year_founded": 2000,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,sports,auditorium,medical,hostel"
      },
      {
        "name": "College of Home Science",
        "year_founded": 1988,
        "state": "Rajasthan",
        "city": "Bikaner",
        "facilities": "library,laboratory,gym,sports,auditorium,hostel,cafeteria,comp labs,medical"
      },
      {
        "name": "Bharati Vidyapeeth College of Physical Education",
        "year_founded": 1994,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "hostel,medical,sports,canteen,gym,library,laboratory"
      },
      {
        "name": "College of Vocational Studies - [CVS]",
        "year_founded": 1972,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Cooch behar College",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Cooch Behar",
        "facilities": "library,laboratory,gym,classrooms,security,sports,auditorium,medical,cafeteria,comp labs"
      },
      {
        "name": "Cordia College",
        "year_founded": 2001,
        "state": "Punjab",
        "city": "Fatehgarh Sahib",
        "facilities": "comp labs,sports,gym,laboratory,library,auditorium,hostel,classrooms,wi-fi campus"
      },
      {
        "name": "Crossland College",
        "year_founded": 1984,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "library,auditorium,comp labs,sports,medical,hostel,classrooms,laboratory"
      },
      {
        "name": "Cuttack College",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "library,comp labs,canteen,sports"
      },
      {
        "name": "DAV Centenary College",
        "year_founded": 1985,
        "state": "Haryana",
        "city": "Faridabad",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,gym,laboratory"
      },
      {
        "name": "DAV College",
        "year_founded": 1955,
        "state": "Punjab",
        "city": "Amritsar",
        "facilities": "sports,gym,medical,library,laboratory,auditorium,comp labs,cafeteria,hostel"
      },
      {
        "name": "DAV College - [DAVC]",
        "year_founded": 2005,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "DAV College",
        "year_founded": 1926,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "library,laboratory,hostel,gym,comp labs,medical,auditorium,cafeteria"
      },
      {
        "name": "DAV College",
        "year_founded": 1960,
        "state": "Punjab",
        "city": "Abohar",
        "facilities": "library,hostel,auditorium,cafeteria,medical,sports"
      },
      {
        "name": "DAV College",
        "year_founded": 1918,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "DAV College",
        "year_founded": 1917,
        "state": "Uttar Pradesh",
        "city": "Muzaffarnagar",
        "facilities": "sports,gym,medical,library,auditorium,hostel,laboratory,cafeteria,comp labs"
      },
      {
        "name": "DAV College For Women",
        "year_founded": 1969,
        "state": "Punjab",
        "city": "Firozpur",
        "facilities": "gym,sports,medical,hostel,library,laboratory,comp labs,cafeteria,auditorium"
      },
      {
        "name": "DAV College of Education",
        "year_founded": 1966,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "medical,sports,gym,auditorium,comp labs,library,laboratory,hostel,cafeteria"
      },
      {
        "name": "D.A.V. P.G. College",
        "year_founded": 1970,
        "state": "Uttar Pradesh",
        "city": "Gorakhpur",
        "facilities": "comp labs,library,laboratory,classrooms,sports,cafeteria"
      },
      {
        "name": "DAV PG College",
        "year_founded": 1918,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "sports,medical,library,gym,comp labs,auditorium,cafeteria,laboratory,hostel"
      },
      {
        "name": "DAV Post Graduate College",
        "year_founded": 1938,
        "state": "Uttar Pradesh",
        "city": "Varanasi",
        "facilities": "medical,sports,gym,library,laboratory,hostel,cafeteria,comp labs,auditorium"
      },
      {
        "name": "DAV College",
        "year_founded": 1969,
        "state": "Punjab",
        "city": "Bathinda",
        "facilities": "comp labs,sports,gym,cafeteria,laboratory,library,auditorium,medical,hostel"
      },
      {
        "name": "DAVV Mateshwari Sugni Devi Girls College",
        "year_founded": 1982,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "library,laboratory,comp labs,sports,classrooms,auditorium,wi-fi campus"
      },
      {
        "name": "D.B Pampa College Parumala",
        "year_founded": 1968,
        "state": "Kerala",
        "city": "Pathanamthitta",
        "facilities": "library,auditorium,sports,cafeteria,comp labs,medical,classrooms,laboratory,gym,hostel"
      },
      {
        "name": "DBS PG College",
        "year_founded": 1961,
        "state": "Uttarakhand",
        "city": "Dehradun",
        "facilities": "library,auditorium,hostel,cafeteria,sports,medical,comp labs"
      },
      {
        "name": "Daggubati Chenchu Ramaiah Memorial Post Graduation College - [DCRM]",
        "year_founded": 2007,
        "state": "Andhra Pradesh",
        "city": "Prakasam",
        "facilities": "hostel,library,laboratory,comp labs,sports,auditorium,canteen,medical"
      },
      {
        "name": "D. D. Shinde Sarkar College",
        "year_founded": 1988,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "medical,sports,library,laboratory,gym,cafeteria,auditorium,hostel,comp labs"
      },
      {
        "name": "D.D. Thakar Arts and K.J. Patel Commerce College",
        "year_founded": 1987,
        "state": "Gujarat",
        "city": "Sabarkantha",
        "facilities": "cafeteria,sports,library,comp labs,laboratory"
      },
      {
        "name": "Dharumapuram Gnanambikai Government Arts College for Women - [DGGA]",
        "year_founded": 1967,
        "state": "Tamil Nadu",
        "city": "Nagapattinam",
        "facilities": ""
      },
      {
        "name": "D.G.M.M.E.S Mampad College",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "library,laboratory,comp labs,auditorium,hostel,cafeteria,medical,transport,gym,classrooms"
      },
      {
        "name": "D.K. College",
        "year_founded": 1956,
        "state": "Bihar",
        "city": "Buxar",
        "facilities": "comp labs,sports,laboratory,library,auditorium,hostel,cafeteria,medical,wi-fi campus,transport,classrooms"
      },
      {
        "name": "D.L.S. P.G. College",
        "year_founded": 1997,
        "state": "Chhattisgarh",
        "city": "Bilaspur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,wi-fi campus"
      },
      {
        "name": "D.M. College",
        "year_founded": 1926,
        "state": "Punjab",
        "city": "Moga",
        "facilities": "cafeteria,library,auditorium,medical"
      },
      {
        "name": "DM College of Arts",
        "year_founded": 1946,
        "state": "Manipur",
        "city": "Imphal",
        "facilities": "library,hostel,sports,laboratory"
      },
      {
        "name": "D.N. Jain College",
        "year_founded": 1949,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "comp labs,laboratory,library,auditorium,sports"
      },
      {
        "name": "Dantuluri Narayana Raju college - [DNR]",
        "year_founded": 1945,
        "state": "Andhra Pradesh",
        "city": "Godavari",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms,security,transport,banks,wi-fi campus"
      },
      {
        "name": "D. R. Mane Mahavidyalaya",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "medical,sports,library,laboratory,auditorium,comp labs,cafeteria,gym,hostel"
      },
      {
        "name": "D.R. Nayapalli College",
        "year_founded": 1983,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": ""
      },
      {
        "name": "Duvvuru Ramanamma Women’s College - [DRW]",
        "year_founded": 1981,
        "state": "Andhra Pradesh",
        "city": "Guduru",
        "facilities": "comp labs,library,laboratory,cafeteria,medical,auditorium,transport,gym,banks,classrooms"
      },
      {
        "name": "Dharma Samaj College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Aligarh",
        "facilities": "medical,sports,gym,library,laboratory,cafeteria,comp labs,hostel,auditorium"
      },
      {
        "name": "DVS College of Arts & Science",
        "year_founded": 1966,
        "state": "Karnataka",
        "city": "Shimoga",
        "facilities": "gym,hostel,cafeteria,comp labs,laboratory,library,auditorium,sports,medical"
      },
      {
        "name": "Dahiwadi College",
        "year_founded": 1965,
        "state": "Maharashtra",
        "city": "Satara",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium,comp labs,gym,hostel"
      },
      {
        "name": "Dakshin Kamrup College",
        "year_founded": 1961,
        "state": "Assam",
        "city": "Nalbari",
        "facilities": "gym,cafeteria,comp labs,laboratory,library,hostel,medical,auditorium"
      },
      {
        "name": "Dakshin Kamrup Girls College",
        "year_founded": 1988,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "hostel,gym,medical,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dalmia College Rajgangpur",
        "year_founded": 1970,
        "state": "Orissa",
        "city": "Sundergarh",
        "facilities": "gym,sports,hostel,comp labs,laboratory,library,auditorium,cafeteria,medical,classrooms,security"
      },
      {
        "name": "Damber Singh College",
        "year_founded": 1994,
        "state": "Sikkim",
        "city": "East Sikkim",
        "facilities": "medical,library,laboratory,sports,gym,auditorium,hostel,comp labs,cafeteria"
      },
      {
        "name": "Darjeeling Government College - [DGC]",
        "year_founded": 1948,
        "state": "West Bengal",
        "city": "Darjeeling",
        "facilities": "library,laboratory,sports,auditorium,comp labs,cafeteria,hostel,medical"
      },
      {
        "name": "Darrang College",
        "year_founded": 1945,
        "state": "Assam",
        "city": "Tezpur",
        "facilities": "medical,sports,library,laboratory,comp labs,gym,hostel,auditorium,cafeteria"
      },
      {
        "name": "Darshan Singh Smriti Mahavidyalaya",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Auraiya",
        "facilities": "library,hostel,medical,sports,comp labs"
      },
      {
        "name": "Dasarath Deb Memorial College - [DDMC]",
        "year_founded": 1979,
        "state": "Tripura",
        "city": "West Tripura",
        "facilities": "medical,sports,library,laboratory,auditorium,gym,cafeteria,hostel,comp labs"
      },
      {
        "name": "Dasmesh Girls College - [DGC]",
        "year_founded": 2000,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "medical,sports,library,laboratory,gym,auditorium,cafeteria,comp labs,hostel"
      },
      {
        "name": "Dasmesh Girls College of Education",
        "year_founded": 2005,
        "state": "Punjab",
        "city": "Muktsar",
        "facilities": "comp labs,sports,cafeteria,library,hostel,medical,laboratory,gym,auditorium"
      },
      {
        "name": "Daudnagar College",
        "year_founded": 1970,
        "state": "Bihar",
        "city": "Aurangabad",
        "facilities": "library,sports,gym,laboratory,comp labs,cafeteria,auditorium,hostel,medical"
      },
      {
        "name": "Daulat Ram College - [DRC]",
        "year_founded": 1960,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,banks,security,communication centre,wi-fi campus,hostel"
      },
      {
        "name": "Dayanand Arya Kanya Degree College\n",
        "year_founded": 1960,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "comp labs,library,cafeteria,laboratory,auditorium,sports,communication centre,medical"
      },
      {
        "name": "Dayanand Bachhrawan PG College",
        "year_founded": 1977,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "library,medical,cafeteria,sports,laboratory"
      },
      {
        "name": "Dayanand Brajendra Swarup College - [DBS]",
        "year_founded": 1959,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "auditorium,cafeteria,sports,medical,laboratory,comp labs,library"
      },
      {
        "name": "Dayanand College",
        "year_founded": 1833,
        "state": "Rajasthan",
        "city": "Ajmer",
        "facilities": "library,sports,medical,cafeteria,laboratory"
      },
      {
        "name": "Dayanand College",
        "year_founded": 1950,
        "state": "Haryana",
        "city": "Hisar",
        "facilities": "comp labs,cafeteria,laboratory,library"
      },
      {
        "name": "Dayanand Danku Paraga Gyan Uday Mahavidyalaya - [DDPGUM]",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "medical,library,laboratory,comp labs,auditorium,canteen,cafeteria"
      },
      {
        "name": "Dayanand Mahila Mahavidyalaya",
        "year_founded": 1982,
        "state": "Haryana",
        "city": "Kurukshetra",
        "facilities": "comp labs,library,auditorium,canteen,cafeteria"
      },
      {
        "name": "Dayanand Vedic College - [DVC]",
        "year_founded": 1951,
        "state": "Uttar Pradesh",
        "city": "Orai",
        "facilities": "auditorium,canteen,cafeteria,library,comp labs,laboratory"
      },
      {
        "name": "Dayapuram Arts and Science College for Women - [DASCW]",
        "year_founded": 2002,
        "state": "Kerala",
        "city": "Calicut",
        "facilities": "hostel,auditorium,canteen,medical,comp labs,library,classrooms"
      },
      {
        "name": "Debra Thana Sahid Kshudiram Smriti Mahavidyalaya",
        "year_founded": 2006,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "library,comp labs,medical,auditorium,canteen,classrooms"
      },
      {
        "name": "Debraj Roy College",
        "year_founded": 1949,
        "state": "Assam",
        "city": "Golaghat",
        "facilities": "hostel,auditorium,comp labs,library,medical,canteen"
      },
      {
        "name": "Deen Dayal Upadhaya Girls Govt PG College",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "hostel,medical,sports,gym,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Deen Dayal Upadhyaya College",
        "year_founded": 1990,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium"
      },
      {
        "name": "Delhi College of Arts and Commerce - [DCAC]",
        "year_founded": 1987,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Delhi School of Economics, University of Delhi - [DSE]",
        "year_founded": 1949,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,cafeteria,library,auditorium,classrooms,laboratory,sports,comp labs,hostel"
      },
      {
        "name": "Demow College",
        "year_founded": 1970,
        "state": "Assam",
        "city": "Sibsagar",
        "facilities": "medical,hostel,auditorium,cafeteria,library,sports,comp labs"
      },
      {
        "name": "Deogiri College",
        "year_founded": 1960,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "library,laboratory,auditorium,sports,gym,cafeteria,comp labs,hostel,medical"
      },
      {
        "name": "Dera Natung Government College - [DNGC]",
        "year_founded": 1979,
        "state": "Arunachal Pradesh",
        "city": "Itanagar",
        "facilities": "sports,auditorium,library,cafeteria,medical,classrooms,laboratory,comp labs"
      },
      {
        "name": "Derozio Memorial College - [DMC]",
        "year_founded": 1996,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "laboratory,library,cafeteria,medical"
      },
      {
        "name": "Deshabandhu Mahavidyalaya - [DBM]",
        "year_founded": 1973,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "medical,hostel,cafeteria,library,sports"
      },
      {
        "name": "Deshbandhu College",
        "year_founded": 1952,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,banks,wi-fi campus,classrooms"
      },
      {
        "name": "Deshbandhu College for Girls",
        "year_founded": 1857,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Dev International College",
        "year_founded": 2004,
        "state": "Rajasthan",
        "city": "Alwar",
        "facilities": "library,laboratory,comp labs,sports"
      },
      {
        "name": "Dev Samaj College for Women",
        "year_founded": 1981,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Dev Samaj College For Women - [DSCW]",
        "year_founded": 1957,
        "state": "Punjab",
        "city": "Ferozepur Jhirka",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Deva Matha College - [DMC] Kuravilangad",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "library,comp labs,sports,auditorium,cafeteria,classrooms,medical"
      },
      {
        "name": "Deva Nagri College - [DN]",
        "year_founded": 1882,
        "state": "Uttar Pradesh",
        "city": "Meerut",
        "facilities": "library,auditorium,sports,laboratory,comp labs,cafeteria,hostel,medical,gym"
      },
      {
        "name": "Devamatha Arts and Science College Paisakary",
        "year_founded": 2003,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "hostel,medical,gym,sports,cafeteria,auditorium,comp labs,library,laboratory,classrooms"
      },
      {
        "name": "Devanga Arts College",
        "year_founded": 1970,
        "state": "Tamil Nadu",
        "city": "Virudhunagar",
        "facilities": "comp labs,library,auditorium,medical,hostel,sports,gym,laboratory,cafeteria"
      },
      {
        "name": "Devaswom Board College Thalayolaparambu",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "medical,sports,cafeteria,library,laboratory,auditorium,comp labs,classrooms"
      },
      {
        "name": "Devchand College",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "hostel,medical,gym,cafeteria,sports,library,laboratory,auditorium,comp labs,classrooms,transport,banks"
      },
      {
        "name": "DeviCharan Barua Girls College - [DCB]",
        "year_founded": 1955,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": "comp labs,sports,medical,library,hostel,gym,laboratory,cafeteria,auditorium"
      },
      {
        "name": "Devki Devi Jain Memorial College for Women - [DDJMC]",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Devta Mahavidyalaya",
        "year_founded": 2000,
        "state": "Uttar Pradesh",
        "city": "Bijnor",
        "facilities": "hostel,medical,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Dewan Abdul Gani College - [DAGC]",
        "year_founded": 1994,
        "state": "West Bengal",
        "city": "Dakshin Dinajpur",
        "facilities": "library,hostel,auditorium,cafeteria,medical,sports,classrooms,e-classroom"
      },
      {
        "name": "Dewanhat Mahavidyalaya",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Cooch Behar",
        "facilities": "library,hostel,auditorium,cafeteria,medical,comp labs,laboratory,classrooms,security"
      },
      {
        "name": "Dhakuakhana College",
        "year_founded": 1966,
        "state": "Assam",
        "city": "Lakhimpur",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "D.K.M College for Women - [DKM]",
        "year_founded": 1972,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Dhanaji Nana Mahavidyalaya",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": "sports,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Dhanalakshmi Srinivasan College of Arts and Science for Women - [DSCAS]",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Perambalur",
        "facilities": "medical,hostel,gym,sports,cafeteria,library,laboratory,auditorium,comp labs"
      },
      {
        "name": "Dhanraj Baid Jain College - [DBJC]",
        "year_founded": 1972,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,gym,comp labs,laboratory"
      },
      {
        "name": "Dhanwate National College - [DNC]",
        "year_founded": 1935,
        "state": "Maharashtra",
        "city": "Nagpur",
        "facilities": "comp labs,sports,gym,medical,library,auditorium,hostel,wi-fi campus,laboratory,classrooms"
      },
      {
        "name": "Dharam Jyoti Mahavidhyalaya",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Aligarh",
        "facilities": "library,cafeteria,hostel,auditorium,medical,sports,laboratory,comp labs"
      },
      {
        "name": "Dharma Apparao College - [DAR]",
        "year_founded": 1966,
        "state": "Andhra Pradesh",
        "city": "Krishna",
        "facilities": "comp labs,gym,laboratory,library,sports,medical,cafeteria,auditorium,hostel,classrooms,security"
      },
      {
        "name": "Dharmamurthi Rao Bahadur Calavala Cunnan Chettys Hindu College - [DRBCCC]",
        "year_founded": 1969,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,sports,cafeteria,laboratory,auditorium,classrooms,library"
      },
      {
        "name": "Dharmashala Mahavidyalaya",
        "year_founded": 1978,
        "state": "Orissa",
        "city": "Jajapur",
        "facilities": "cafeteria,comp labs,library,laboratory,gym,auditorium,sports,medical,hostel"
      },
      {
        "name": "Dharmendrasinhji Arts College",
        "year_founded": 1937,
        "state": "Gujarat",
        "city": "Rajkot",
        "facilities": "library,auditorium,gym,cafeteria,comp labs,hostel,medical,sports,laboratory"
      },
      {
        "name": "Dhemaji College",
        "year_founded": 1965,
        "state": "Assam",
        "city": "Dhemaji",
        "facilities": "hostel,library,canteen,auditorium,medical,laboratory,comp labs"
      },
      {
        "name": "Dhemaji Commerce College",
        "year_founded": 1982,
        "state": "Assam",
        "city": "Dhemaji",
        "facilities": "library,laboratory,medical,auditorium,gym,comp labs,sports,hostel,cafeteria"
      },
      {
        "name": "DCT’s Dhempe College of Arts and Science",
        "year_founded": 1962,
        "state": "Goa",
        "city": "Panji",
        "facilities": "comp labs,library,laboratory,auditorium,medical,sports,cafeteria,classrooms"
      },
      {
        "name": "Dhenkanal Autonomous College",
        "year_founded": 1959,
        "state": "Orissa",
        "city": "Dhenkanal",
        "facilities": "comp labs,laboratory,library,cafeteria,auditorium,medical"
      },
      {
        "name": "Dhing College",
        "year_founded": 1965,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,sports,auditorium,medical,hostel"
      },
      {
        "name": "Dhirendra Mahila Mahavidyalaya",
        "year_founded": 2002,
        "state": "Uttar Pradesh",
        "city": "Varanasi",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,sports,auditorium"
      },
      {
        "name": "Dhruba Chand Halder College - [DCH]",
        "year_founded": 1965,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "library,comp labs,laboratory,cafeteria,hostel,sports,auditorium,medical,gym"
      },
      {
        "name": "Dibru College",
        "year_founded": 1963,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "gym,comp labs,laboratory,library,cafeteria,hostel,sports,medical,auditorium"
      },
      {
        "name": "Dibrugarh Hanumanbux Surajmal Kanoi College - [DHSK]",
        "year_founded": 1945,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "comp labs,laboratory,library,auditorium,cafeteria,medical,sports,hostel"
      },
      {
        "name": "Digboi College",
        "year_founded": 1965,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Digvijay Nath Post Graduate College - [DNPG]",
        "year_founded": 1969,
        "state": "Uttar Pradesh",
        "city": "Gorakhpur",
        "facilities": "hostel,cafeteria,comp labs,laboratory,library,auditorium,medical,sports,classrooms"
      },
      {
        "name": "Dikhowmukh College",
        "year_founded": 1982,
        "state": "Assam",
        "city": "Sibsagar",
        "facilities": "gym,cafeteria,comp labs,laboratory,library,hostel,auditorium,sports,medical"
      },
      {
        "name": "Dimapur Government College",
        "year_founded": 1966,
        "state": "Nagaland",
        "city": "Dimapur",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs"
      },
      {
        "name": "Dimoria College",
        "year_founded": 1979,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dinabandhu Andrews College - [DAC]",
        "year_founded": 1956,
        "state": "West Bengal",
        "city": "Baishnabnagar",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Dinakrushna College- [DK College]",
        "year_founded": 1964,
        "state": "Orissa",
        "city": "Baleswar",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,hostel,sports,medical,security,classrooms"
      },
      {
        "name": "Discipleship Bible College - [DBC]",
        "year_founded": 1981,
        "state": "Nagaland",
        "city": "Dimapur",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Dispur College",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": ""
      },
      {
        "name": "Divyabha Girls Degree College",
        "year_founded": 1993,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Doaba College",
        "year_founded": 1941,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "comp labs,sports,laboratory,library,auditorium,hostel,gym,medical,cafeteria"
      },
      {
        "name": "Dodla Kousalyamma Government College for Women",
        "year_founded": 1964,
        "state": "Andhra Pradesh",
        "city": "Nellore",
        "facilities": ""
      },
      {
        "name": "Don Bosco Arts and Science College  - [DBASC] Angadikadavu",
        "year_founded": 2003,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "canteen,hostel,comp labs,laboratory,library,auditorium,sports,transport,classrooms,medical"
      },
      {
        "name": "Don Bosco College Sulthan Bathery",
        "year_founded": 2005,
        "state": "Kerala",
        "city": "Wayanad",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,hostel,laboratory"
      },
      {
        "name": "Doranda College - [DC]",
        "year_founded": 1962,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,auditorium,sports,banks,classrooms"
      },
      {
        "name": "Dr AH Rizvi Degree College",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Kaushambi",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Dr. A. V. Baliga Institute of Social Sciences and Rural Management",
        "year_founded": 2007,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,security"
      },
      {
        "name": "Dnyanasadhana College",
        "year_founded": 1980,
        "state": "Maharashtra",
        "city": "Thane",
        "facilities": "classrooms,canteen,comp labs,communication centre,library,laboratory,medical"
      },
      {
        "name": "Dnyanopasak Shikshan Mandal's College of Arts Commerce and Science - [DSM-CACS]",
        "year_founded": 1981,
        "state": "Maharashtra",
        "city": "Parbhani",
        "facilities": "medical,library,comp labs,laboratory,sports,auditorium,cafeteria"
      },
      {
        "name": "Dnyanprassarak Mandal's College of Arts Science Commerce Management Studies & Technology",
        "year_founded": 1974,
        "state": "Goa",
        "city": "Bardez",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Dr BRA Government Girls Degree College",
        "year_founded": 1990,
        "state": "Uttar Pradesh",
        "city": "Fatehpur",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Dr. B. R. Ambedkar University of Social Sciences",
        "year_founded": 1988,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Dr. Bhimrao Ambedkar Mahavidyala",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym"
      },
      {
        "name": "Dr. Bhupendra Nath Dutta Smriti Mahavidyalaya",
        "year_founded": 1996,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Dr. D.Y. Patil Arts, Science and Commerce College Pimpri",
        "year_founded": 1995,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "sports,medical,library,auditorium,hostel"
      },
      {
        "name": "Dr. G. Shankar Government Women's First Grade College and Post Graduate Study Centre",
        "year_founded": 2003,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dr Ghali College",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "comp labs,library,laboratory,cafeteria,auditorium,hostel,sports"
      },
      {
        "name": "Dr Gour Mohan Roy College",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Dr Harivansh Rai Bachchan Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Unnao",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Dr. Kanailal Bhattacharyya College",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dr. Lankapalli Bullayya College",
        "year_founded": 1973,
        "state": "Andhra Pradesh",
        "city": "Visakhapatnam",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms,security,banks"
      },
      {
        "name": "Dr. MGR Janaki College of Arts and Science for Women",
        "year_founded": 1996,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "medical,laboratory,comp labs,library,auditorium,cafeteria,sports"
      },
      {
        "name": "Dr NGP Arts and Science College",
        "year_founded": 1997,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Dr.R.K.Shanmugam College of Arts and Science",
        "year_founded": 1997,
        "state": "Tamil Nadu",
        "city": "Villupuram",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium"
      },
      {
        "name": "Dr. Rajendra Prasad Memorial Degree College - [RPMDC]",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "medical,hostel,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dr Ram Manohar Lohiya Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Ballia",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Dr Rammanohar Lohiya Mahavidyalaya",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium"
      },
      {
        "name": "Dr. SNS Rajalakshmi College of Arts and Science",
        "year_founded": 1999,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Dr SRK Government Arts College",
        "year_founded": 1973,
        "state": "Puducherry",
        "city": "Yanam",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Dr. Shyama Prasad Mukherjee Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Auraiya",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dr Subhash Mahila Arts Commerce and Home Science College",
        "year_founded": 1976,
        "state": "Gujarat",
        "city": "Junagadh",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,hostel,sports"
      },
      {
        "name": "Dr Umayal Ramanathan College for Women",
        "year_founded": 2006,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,sports"
      },
      {
        "name": "Dr ZH Post Graduate College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Shahjahanpur",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel"
      },
      {
        "name": "Dr Zakir Husain College",
        "year_founded": 1970,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Dr. Ambedkar Govt. Arts College - [DAGAC]",
        "year_founded": 1972,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Dronacharya Government College",
        "year_founded": 1951,
        "state": "Haryana",
        "city": "Gurgaon",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dudhnoi College",
        "year_founded": 1972,
        "state": "Assam",
        "city": "Goalpara",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Dulari Devi Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Deoria",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Duliajan College",
        "year_founded": 1969,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "classrooms,canteen,comp labs,communication centre,library,laboratory,medical"
      },
      {
        "name": "Dumkal College",
        "year_founded": 1999,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "medical,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Durga Mahavidyalaya",
        "year_founded": 1951,
        "state": "Chhattisgarh",
        "city": "Raipur",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Durga Prasad Baljeet Singh Post Graduate College",
        "year_founded": 1965,
        "state": "Uttar Pradesh",
        "city": "Bulandshahr",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Durgapur Government College Durgapur",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "DG Vaishnav College - [DDGDVC]",
        "year_founded": 1963,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "hostel,library,laboratory,comp labs,auditorium,medical,gym,sports,cafeteria"
      },
      {
        "name": "Dwijendralal College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "classrooms,library,laboratory,comp labs,auditorium,sports,medical,cafeteria"
      },
      {
        "name": "Dyal Singh College - [DSC]",
        "year_founded": 1959,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,classrooms,transport,swimming pool"
      },
      {
        "name": "Dyal Singh Evening College",
        "year_founded": 1958,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,sports,classrooms"
      },
      {
        "name": "EK Nayanar Memorial Government College - [EKNMG]",
        "year_founded": 1981,
        "state": "Kerala",
        "city": "Kasaragod",
        "facilities": "medical,sports,auditorium,cafeteria,library,laboratory,hostel"
      },
      {
        "name": "EMEA College of Arts and Science Kondotty",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,transport"
      },
      {
        "name": "E.M.G. Yadava Women's College",
        "year_founded": 1974,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "medical,cafeteria,library,auditorium,hostel,sports,gym,comp labs,laboratory"
      },
      {
        "name": "East Calcutta Girls College - [ECGC]",
        "year_founded": 1978,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports,classrooms"
      },
      {
        "name": "Egra SSB College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "classrooms,library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Ekarma College",
        "year_founded": 1978,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": ""
      },
      {
        "name": "Elphinstone College",
        "year_founded": 1835,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium"
      },
      {
        "name": "Emarti Devi Women's College",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Eram Girls Degree College",
        "year_founded": 1998,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "sports,library,hostel"
      },
      {
        "name": "Erode Arts College and Science College",
        "year_founded": 1971,
        "state": "Tamil Nadu",
        "city": "Erode",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Ethiraj College for Women",
        "year_founded": 1948,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "medical,cafeteria,library,hostel,auditorium"
      },
      {
        "name": "Ettumanoorappan College Ettumanoor",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Everest Institute of Management and Technology",
        "year_founded": 2001,
        "state": "Rajasthan",
        "city": "Alwar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Ewing Christian College - [ECC]",
        "year_founded": 1902,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "FD Arts and Commerce College for Women",
        "year_founded": 1990,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "FGM Government College",
        "year_founded": 1981,
        "state": "Haryana",
        "city": "Hisar",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports,laboratory,canteen,communication centre,transport,classrooms,security"
      },
      {
        "name": "Farook Arts and Science College Kottakkal",
        "year_founded": 2005,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "laboratory,comp labs,library,sports,classrooms"
      },
      {
        "name": "Farook College",
        "year_founded": 1948,
        "state": "Kerala",
        "city": "Kozhikode",
        "facilities": "auditorium,library,hostel,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Fatima College",
        "year_founded": 1953,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory"
      },
      {
        "name": "Fatima Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Hardoi",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Fatima Mata National College",
        "year_founded": 1951,
        "state": "Kerala",
        "city": "Kollam",
        "facilities": "comp labs,sports,laboratory,library,auditorium"
      },
      {
        "name": "Fergusson College",
        "year_founded": 1885,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "sports,gym,cafeteria,library,auditorium,hostel,canteen,laboratory,comp labs"
      },
      {
        "name": "Field Marshal KM Cariappa College - [FMKMCC]",
        "year_founded": 1949,
        "state": "Karnataka",
        "city": "Kodagu",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical"
      },
      {
        "name": "Forbesganj College",
        "year_founded": 1959,
        "state": "Bihar",
        "city": "Araria",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms,security"
      },
      {
        "name": "GD Modi Arts College",
        "year_founded": 1964,
        "state": "Gujarat",
        "city": "Banaskantha",
        "facilities": ""
      },
      {
        "name": "GDC Memorial College",
        "year_founded": 2011,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "GHG Khalsa College",
        "year_founded": 1948,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,gym,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Gore Lal Mehta College",
        "year_founded": 1955,
        "state": "Bihar",
        "city": "Purnea",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "K.M.E. Society’s G. M. Momin Women’s College",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Thane",
        "facilities": "medical,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms,communication centre"
      },
      {
        "name": "Guru Nanak College for Women",
        "year_founded": 1969,
        "state": "Punjab",
        "city": "Nawanshahr",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Guru Nanak Khalsa College of Arts, Science & Commerce",
        "year_founded": 1937,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,sports,gym,canteen,auditorium,security,comp labs,laboratory,hostel,communication centre"
      },
      {
        "name": "GS College of Commerce and Economics",
        "year_founded": 1948,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "G.T.N. Arts College",
        "year_founded": 1964,
        "state": "Tamil Nadu",
        "city": "Dindigul",
        "facilities": "medical,hostel,gym,library,laboratory,cafeteria,auditorium,comp labs,sports"
      },
      {
        "name": "Gandhi Centenary B.T. College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "library,cafeteria,hostel,auditorium,medical,sports,classrooms,comp labs,laboratory"
      },
      {
        "name": "Gandhi FaizEAam College",
        "year_founded": 1947,
        "state": "Uttar Pradesh",
        "city": "Shahjahanpur",
        "facilities": "sports,library,auditorium,cafeteria,medical,comp labs,laboratory,banks"
      },
      {
        "name": "Gandhi Memorial National College - [GMN]",
        "year_founded": 1948,
        "state": "Haryana",
        "city": "Ambala",
        "facilities": "medical,library,auditorium,cafeteria,sports,comp labs"
      },
      {
        "name": "Gandhi Smarak PG College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,cafeteria,hostel,auditorium,sports,medical,comp labs,laboratory"
      },
      {
        "name": "Gandhi Smarak Post Graduate College",
        "year_founded": 1961,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "comp labs,sports,laboratory,library,auditorium,hostel,medical"
      },
      {
        "name": "Gangadhar Meher University",
        "year_founded": 1944,
        "state": "Orissa",
        "city": "Sambalpur",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,hostel,transport,communication centre,cafeteria"
      },
      {
        "name": "Gangarampur College",
        "year_founded": 1981,
        "state": "West Bengal",
        "city": "Gangarampur",
        "facilities": "library,laboratory,comp labs,cafeteria,classrooms,sports"
      },
      {
        "name": "Garden City University - [GCU]",
        "year_founded": 1992,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "auditorium,comp labs,cafeteria,gym,hostel,sports,library,laboratory,medical,classrooms,banks,security"
      },
      {
        "name": "Gargi College",
        "year_founded": 1967,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,banks,transport"
      },
      {
        "name": "Garhbeta College",
        "year_founded": 1948,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "medical,library,comp labs,auditorium,sports,cafeteria,classrooms,hostel,laboratory"
      },
      {
        "name": "MES's Garware College of Commerce - [GCC]",
        "year_founded": 1967,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "e-classroom,comp labs,library,auditorium,medical,gym,hostel,cafeteria,communication centre,security,laboratory"
      },
      {
        "name": "Gaur Brahman Degree College",
        "year_founded": 1970,
        "state": "Haryana",
        "city": "Rohtak",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,laboratory,hostel"
      },
      {
        "name": "Gaya College",
        "year_founded": 1962,
        "state": "Bihar",
        "city": "Gaya",
        "facilities": "comp labs,cafeteria,library"
      },
      {
        "name": "Gems Arts and Science College",
        "year_founded": 2009,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "medical,laboratory,comp labs,auditorium,cafeteria,sports,hostel"
      },
      {
        "name": "General Shivdev Singh Diwan Gurbachan Singh Khalsa College",
        "year_founded": 1960,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Ghanshyam Singh Arya Kanya Mahavidyalaya",
        "year_founded": 1978,
        "state": "Chhattisgarh",
        "city": "Durg",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports,hostel,classrooms"
      },
      {
        "name": "Ginni Devi Modi Girls P.G. College",
        "year_founded": 1983,
        "state": "Uttar Pradesh",
        "city": "Modinagar",
        "facilities": "medical,hostel,sports,gym,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Gnanodaya Degree College",
        "year_founded": 2013,
        "state": "Telangana",
        "city": "Nizamabad",
        "facilities": "classrooms,medical,security,comp labs,laboratory,library,sports"
      },
      {
        "name": "Goa College of Engineering - [GEC]",
        "year_founded": 1967,
        "state": "Goa",
        "city": "Ponda",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms,e-classroom"
      },
      {
        "name": "Goalpara College",
        "year_founded": 1955,
        "state": "Assam",
        "city": "Goalpara",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Gobardanga Hindu College",
        "year_founded": 1947,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "comp labs,library,medical,auditorium,gym,laboratory,cafeteria,sports,hostel,classrooms"
      },
      {
        "name": "Gobinda Prasad Mahavidyalaya",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria"
      },
      {
        "name": "Gochar Mahavidyalaya",
        "year_founded": 1959,
        "state": "Uttar Pradesh",
        "city": "Saharanpur",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium"
      },
      {
        "name": "Gogamukh College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Dhemaji",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Gokhale Centenary College - [GCC]",
        "year_founded": 1966,
        "state": "Karnataka",
        "city": "Ankola",
        "facilities": "cafeteria,sports,library,medical,comp labs,classrooms"
      },
      {
        "name": "Gokhale Education Society's HPT Arts and RYK Science College",
        "year_founded": 1924,
        "state": "Maharashtra",
        "city": "Nashik",
        "facilities": "gym,auditorium,sports,library,laboratory,comp labs"
      },
      {
        "name": "Gokhale Memorial Girls' College",
        "year_founded": 1938,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "classrooms,laboratory,comp labs,library,sports,auditorium,medical,cafeteria,hostel"
      },
      {
        "name": "Gokul Das Hindu Girls College",
        "year_founded": 1952,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,laboratory,comp labs,cafeteria,classrooms,medical,auditorium,banks,security"
      },
      {
        "name": "Gopeshwar College Hathua",
        "year_founded": 1956,
        "state": "Bihar",
        "city": "Gopalganj",
        "facilities": "library,cafeteria,e-classroom"
      },
      {
        "name": "Goreswar College",
        "year_founded": 1974,
        "state": "Assam",
        "city": "Baksa",
        "facilities": "library,comp labs"
      },
      {
        "name": "Gossner College",
        "year_founded": 1971,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Gour Mahavidyalya",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Gour Mohan Sachin Mandal Mahavidyalaya - [GMSMM]",
        "year_founded": 1969,
        "state": "West Bengal",
        "city": "South 24 Parganas",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Goutham College",
        "year_founded": 1986,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,library,auditorium,hostel,comp labs,sports,cafeteria,laboratory"
      },
      {
        "name": "Government Maharani Laxmi Bai Girls PG College",
        "year_founded": 1963,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,hostel,auditorium,security,medical,classrooms"
      },
      {
        "name": "Government First Grade College Bettampady",
        "year_founded": 1991,
        "state": "Karnataka",
        "city": "Dakshin Kannada",
        "facilities": "library,comp labs,sports,cafeteria"
      },
      {
        "name": "SKNR Degree College",
        "year_founded": 1965,
        "state": "Telangana",
        "city": "Karim Nagar",
        "facilities": "library,sports,comp labs"
      },
      {
        "name": "Government Aizawl West College",
        "year_founded": 1990,
        "state": "Mizoram",
        "city": "Aizawl",
        "facilities": "library,comp labs"
      },
      {
        "name": "Government Art's College Niwas",
        "year_founded": 1987,
        "state": "Madhya Pradesh",
        "city": "Mandla",
        "facilities": "library,sports,classrooms"
      },
      {
        "name": "Government Arts and Commerce College",
        "year_founded": 1891,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "library,comp labs"
      },
      {
        "name": "Government Arts and Science College",
        "year_founded": 1977,
        "state": "Karnataka",
        "city": "Karwar",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Government Arts College",
        "year_founded": 1879,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,transport"
      },
      {
        "name": "Government Arts College",
        "year_founded": 1969,
        "state": "Gujarat",
        "city": "Gandhi Nagar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Arts College",
        "year_founded": 1966,
        "state": "Tamil Nadu",
        "city": "Tiruvannamalai",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Arts College",
        "year_founded": 1924,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Arts College for Women",
        "year_founded": 1998,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "classrooms,canteen,comp labs,library,laboratory,medical,auditorium,transport,sports,wi-fi campus,cafeteria"
      },
      {
        "name": "Government Autonomous College",
        "year_founded": 1960,
        "state": "Orissa",
        "city": "Phulbani",
        "facilities": "library,hostel,medical,gym,sports,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Autonomous Post Graduate College",
        "year_founded": 1961,
        "state": "Madhya Pradesh",
        "city": "Chhindwara",
        "facilities": "sports,library,gym,cafeteria,auditorium,medical,hostel"
      },
      {
        "name": "Government Brennen College Dharmadam",
        "year_founded": 1862,
        "state": "Kerala",
        "city": "Thalasery",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory,gym"
      },
      {
        "name": "Government Brijindra College",
        "year_founded": 1942,
        "state": "Punjab",
        "city": "Faridkot",
        "facilities": "library,comp labs,laboratory,cafeteria"
      },
      {
        "name": "Government Chandra Vijay College",
        "year_founded": 1969,
        "state": "Madhya Pradesh",
        "city": "Dindori",
        "facilities": "library,laboratory,comp labs,hostel,sports"
      },
      {
        "name": "Government Chhatrasal PG College",
        "year_founded": 1958,
        "state": "Madhya Pradesh",
        "city": "Panna",
        "facilities": "sports,library,cafeteria,auditorium,medical,hostel,classrooms"
      },
      {
        "name": "Government City College - [GCC]",
        "year_founded": 1921,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "medical,cafeteria,laboratory,library,hostel,gym,sports,auditorium,comp labs"
      },
      {
        "name": "Government College",
        "year_founded": 1972,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College",
        "year_founded": 1950,
        "state": "Haryana",
        "city": "Hisar",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,banks"
      },
      {
        "name": "Government College Kariavattom",
        "year_founded": 1993,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "library,laboratory,sports,medical,hostel,auditorium,cafeteria"
      },
      {
        "name": "Government College",
        "year_founded": 1957,
        "state": "Kerala",
        "city": "Kasaragod",
        "facilities": "comp labs,library,medical,cafeteria,classrooms,laboratory,auditorium,sports,hostel"
      },
      {
        "name": "Government College",
        "year_founded": 1959,
        "state": "Haryana",
        "city": "Jhajjar",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College for Girls",
        "year_founded": 1942,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": "canteen,library,transport,communication centre,wi-fi campus,laboratory,classrooms,medical,security,sports,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Government College for Girls - [GCG]",
        "year_founded": 1943,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College for Women - [GCW]",
        "year_founded": 1969,
        "state": "Jammu and Kashmir",
        "city": "Jammu",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College for Women",
        "year_founded": 1993,
        "state": "Haryana",
        "city": "Mahendragarh",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government College for Women",
        "year_founded": 1961,
        "state": "Jammu and Kashmir",
        "city": "Srinagar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Degree College (Men) - [GDCSKLM]",
        "year_founded": 1951,
        "state": "Andhra Pradesh",
        "city": "Srikakulam",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College of Art and Craft - [GCAC]",
        "year_founded": 1864,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "cafeteria,library,medical,auditorium,sports,laboratory,classrooms"
      },
      {
        "name": "Government College of Arts Science and Commerce Quepem",
        "year_founded": 1989,
        "state": "Goa",
        "city": "North Goa",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Government College of Arts Science and Commerce Sanquelim",
        "year_founded": 1988,
        "state": "Goa",
        "city": "North Goa",
        "facilities": "sports,medical,auditorium,cafeteria,library,comp labs,laboratory,wi-fi campus,classrooms,e-classroom"
      },
      {
        "name": "Government College of Educational Psychology and Guidance",
        "year_founded": 1947,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Government College (Autonomous)",
        "year_founded": 1957,
        "state": "Orissa",
        "city": "Angul",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government DB Girl's Post Graduate College",
        "year_founded": 1958,
        "state": "Chhattisgarh",
        "city": "Raipur",
        "facilities": "sports,laboratory,hostel,library,cafeteria,comp labs,medical,gym,classrooms"
      },
      {
        "name": "Government Degree College - [GDC]",
        "year_founded": 1989,
        "state": "Uttarakhand",
        "city": "Almora",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government Degree College",
        "year_founded": 1989,
        "state": "Madhya Pradesh",
        "city": "Katni",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,auditorium,sports,classrooms"
      },
      {
        "name": "Government Degree College",
        "year_founded": 1970,
        "state": "Jammu and Kashmir",
        "city": "Srinagar",
        "facilities": ""
      },
      {
        "name": "Government Degree College",
        "year_founded": 2005,
        "state": "Jammu and Kashmir",
        "city": "Jammu",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government Degree College",
        "year_founded": 1948,
        "state": "Madhya Pradesh",
        "city": "Chhatarpur",
        "facilities": "sports,library,cafeteria,auditorium,medical,comp labs"
      },
      {
        "name": "Government Degree College",
        "year_founded": 1993,
        "state": "Uttarakhand",
        "city": "Dehradun",
        "facilities": "library,laboratory,auditorium,comp labs,cafeteria,sports,gym,hostel,medical"
      },
      {
        "name": "Government Degree College - [GDC]",
        "year_founded": 1997,
        "state": "Uttarakhand",
        "city": "Chamoli",
        "facilities": "hostel,sports,medical,gym,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Government Degree College",
        "year_founded": 2003,
        "state": "Uttarakhand",
        "city": "Garhwal",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government College, , Mandleshwar",
        "year_founded": 1982,
        "state": "Madhya Pradesh",
        "city": "Khargone",
        "facilities": "sports,library,classrooms,hostel"
      },
      {
        "name": "Government Degree College",
        "year_founded": 1983,
        "state": "Madhya Pradesh",
        "city": "Mandla",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Government Degree College for Boys",
        "year_founded": 1950,
        "state": "Jammu and Kashmir",
        "city": "Anantnag",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government Degree College for Boys",
        "year_founded": 1961,
        "state": "Jammu and Kashmir",
        "city": "Udhampur",
        "facilities": "sports,medical,cafeteria,laboratory,library,hostel,comp labs,gym,auditorium"
      },
      {
        "name": "Government Degree College for Women",
        "year_founded": 1979,
        "state": "Jammu and Kashmir",
        "city": "Anantnag",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,gym"
      },
      {
        "name": "Government Digvijay Autonomous College",
        "year_founded": 1957,
        "state": "Chhattisgarh",
        "city": "Rajnandgaon",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Government Dungar College",
        "year_founded": 1928,
        "state": "Rajasthan",
        "city": "Bikaner",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Government College of Fine Arts",
        "year_founded": 1910,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Government First Grade College",
        "year_founded": 1982,
        "state": "Karnataka",
        "city": "Chikmagalur",
        "facilities": "medical,cafeteria,library,auditorium,hostel,comp labs,sports,gym,laboratory"
      },
      {
        "name": "Government First Grade College Ajjampura",
        "year_founded": 1988,
        "state": "Karnataka",
        "city": "Chikmagalur",
        "facilities": "medical,cafeteria,library,auditorium,hostel,comp labs,laboratory,gym,sports"
      },
      {
        "name": "Government First Grade College Byndoor",
        "year_founded": 1985,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "library,auditorium,medical,sports,classrooms,banks"
      },
      {
        "name": "Government First Grade College Malur",
        "year_founded": 1988,
        "state": "Karnataka",
        "city": "Kolar",
        "facilities": "medical,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Government First Grade College",
        "year_founded": 1983,
        "state": "Karnataka",
        "city": "Belthangady",
        "facilities": "cafeteria,library,auditorium,classrooms,sports"
      },
      {
        "name": "Government First Grade College Bhadravati",
        "year_founded": null,
        "state": "Karnataka",
        "city": "Shimoga",
        "facilities": "medical,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Government First Grade College Shankaranarayana",
        "year_founded": 1991,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": ""
      },
      {
        "name": "Government Girl's Degree College",
        "year_founded": 1996,
        "state": "Uttarakhand",
        "city": "Nainital",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Girls College",
        "year_founded": 1984,
        "state": "Madhya Pradesh",
        "city": "Sehore",
        "facilities": "sports,library,cafeteria,auditorium,medical,hostel,laboratory,comp labs"
      },
      {
        "name": "Government Girls P.G. College of Excellence",
        "year_founded": 1963,
        "state": "Madhya Pradesh",
        "city": "Sagar",
        "facilities": "sports,library,gym,cafeteria,auditorium,medical,hostel"
      },
      {
        "name": "Government Hamidia Arts And Commerce College",
        "year_founded": 1946,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "sports,library,cafeteria,auditorium,medical,laboratory,classrooms,comp labs,banks"
      },
      {
        "name": "Government Home Science College",
        "year_founded": 1961,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "comp labs,cafeteria,laboratory,library,sports,medical,auditorium"
      },
      {
        "name": "Government Jamuna Prasad Verma Post Graduate Arts and Commerce College",
        "year_founded": 1986,
        "state": "Chhattisgarh",
        "city": "Bilaspur",
        "facilities": "library,laboratory,comp labs,medical,auditorium,sports"
      },
      {
        "name": "Government Lal Bahadur Shastri College",
        "year_founded": 1969,
        "state": "Madhya Pradesh",
        "city": "Vidisha",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Government Lohia College",
        "year_founded": 1945,
        "state": "Rajasthan",
        "city": "Churu",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,cafeteria,gym,hostel"
      },
      {
        "name": "Government MAM College",
        "year_founded": 1954,
        "state": "Jammu and Kashmir",
        "city": "Jammu",
        "facilities": "library,laboratory,medical,hostel,auditorium,sports,gym,cafeteria,comp labs"
      },
      {
        "name": "Government MH College of Home Science and Science for Women  (Autonomous)",
        "year_founded": 1954,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "library,auditorium,cafeteria,sports,laboratory,comp labs,classrooms"
      },
      {
        "name": "Government Mahaprabhu Vallabhacharya Post Graduate College",
        "year_founded": 1965,
        "state": "Chhattisgarh",
        "city": "Mahasamund",
        "facilities": ""
      },
      {
        "name": "Government M L B Girls PG College - [MLB]",
        "year_founded": 1956,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms,security"
      },
      {
        "name": "Government Maharishi Valmiki College",
        "year_founded": 1983,
        "state": "Chhattisgarh",
        "city": "Kanker",
        "facilities": "library,laboratory,cafeteria,comp labs,sports,medical,gym,hostel,auditorium"
      },
      {
        "name": "Government Post Graduate College",
        "year_founded": 1996,
        "state": "Uttarakhand",
        "city": "Champawat",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Government Post Graduate College",
        "year_founded": 1975,
        "state": "Uttarakhand",
        "city": "Pithoragarh",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Government Post Graduate College",
        "year_founded": 1968,
        "state": "Himachal Pradesh",
        "city": "Una",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Government Post Graduate College - [GPDC]",
        "year_founded": 1982,
        "state": "Uttar Pradesh",
        "city": "Noida",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Government Ram Bhajan Rai NES College",
        "year_founded": 1963,
        "state": "Chhattisgarh",
        "city": "Jashpur",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Government Ranbir College",
        "year_founded": 1939,
        "state": "Punjab",
        "city": "Sangrur",
        "facilities": "comp labs,gym,medical,laboratory,library,auditorium,sports,cafeteria"
      },
      {
        "name": "Government Saiha College",
        "year_founded": 1974,
        "state": "Mizoram",
        "city": "Saiha",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,laboratory"
      },
      {
        "name": "Government Shahid Kaushal Yadav College",
        "year_founded": 2005,
        "state": "Chhattisgarh",
        "city": "Balod",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,laboratory,classrooms"
      },
      {
        "name": "Government Tulsi Degree College",
        "year_founded": 1972,
        "state": "Madhya Pradesh",
        "city": "Anuppur",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,hostel,classrooms"
      },
      {
        "name": "Government V.Y.T. PG Autonomous College",
        "year_founded": 1958,
        "state": "Chhattisgarh",
        "city": "Durg",
        "facilities": "comp labs,library,medical,auditorium,hostel,classrooms,cafeteria,laboratory,sports"
      },
      {
        "name": "Govind National College - [GNC]",
        "year_founded": 1966,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Govinda Dasa College - [GDC]",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Surathkal",
        "facilities": "medical,auditorium,cafeteria,sports,comp labs,library,laboratory,banks,hostel"
      },
      {
        "name": "Govinda Pai Memorial Government College - [GPMGC]",
        "year_founded": 1980,
        "state": "Kerala",
        "city": "Kasaragod",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,laboratory"
      },
      {
        "name": "Govt Arts & Commerce College",
        "year_founded": null,
        "state": "Gujarat",
        "city": "Sabarkantha",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,sports,gym,hostel,auditorium"
      },
      {
        "name": "Govt Arts and Sports College",
        "year_founded": 1961,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "medical,sports,library,comp labs,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Govt Ranbir College",
        "year_founded": 1926,
        "state": "Punjab",
        "city": "Sangrur",
        "facilities": ""
      },
      {
        "name": "Government College",
        "year_founded": 1972,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "sports,library,canteen,medical,auditorium,comp labs"
      },
      {
        "name": "Government College for Women",
        "year_founded": 1864,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs"
      },
      {
        "name": "Govt College for Women",
        "year_founded": 1991,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "comp labs,library,canteen,auditorium,medical"
      },
      {
        "name": "Govt Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Badaun",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Govt Degree College",
        "year_founded": 1987,
        "state": "Madhya Pradesh",
        "city": "Tikamgarh",
        "facilities": "sports,library,cafeteria,auditorium,medical,hostel"
      },
      {
        "name": "Govt Degree College Women",
        "year_founded": 1968,
        "state": "Andhra Pradesh",
        "city": "Srikakulam",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports,transport"
      },
      {
        "name": "Govt Girls  PG College",
        "year_founded": 1982,
        "state": "Madhya Pradesh",
        "city": "Chhatarpur",
        "facilities": "sports,library,cafeteria,auditorium,medical,hostel"
      },
      {
        "name": "Govt Girls' Degree College",
        "year_founded": 1984,
        "state": "Madhya Pradesh",
        "city": "Barwani",
        "facilities": "sports,library,auditorium,medical,hostel,classrooms"
      },
      {
        "name": "Govt Kalidas Girls College",
        "year_founded": 1981,
        "state": "Madhya Pradesh",
        "city": "Ujjain",
        "facilities": "sports,library,cafeteria,auditorium,medical,hostel,classrooms"
      },
      {
        "name": "Govt Post Graduate College",
        "year_founded": 1976,
        "state": "Uttar Pradesh",
        "city": "Pilibhit",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,hostel,gym,laboratory,sports"
      },
      {
        "name": "Govt Ripudaman College",
        "year_founded": null,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,hostel,gym,sports,laboratory"
      },
      {
        "name": "Government Victoria College",
        "year_founded": 1989,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "hostel,medical,sports,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "Govt College",
        "year_founded": 1927,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,cafeteria,gym,hostel"
      },
      {
        "name": "Grace Bible College",
        "year_founded": 2001,
        "state": "Manipur",
        "city": "Churachandpur",
        "facilities": ""
      },
      {
        "name": "Grace Bible College",
        "year_founded": 2001,
        "state": "Maharashtra",
        "city": "Amravati",
        "facilities": ""
      },
      {
        "name": "Greenway Institute of Management Studies - [GIMS]",
        "year_founded": 1993,
        "state": "Uttarakhand",
        "city": "Dehradun",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Gujarat Arts and Commerce College",
        "year_founded": 1869,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": ""
      },
      {
        "name": "Guru Gobind Singh College for Women",
        "year_founded": 1973,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": ""
      },
      {
        "name": "Guru Nanak College",
        "year_founded": 1971,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "hostel,library,laboratory,cafeteria,comp labs,auditorium,medical,gym,sports"
      },
      {
        "name": "Guru Nanak College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Moga",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,gym,medical,hostel,auditorium"
      },
      {
        "name": "Guru Nanak College, Budhlada - [GNC]",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Mansa",
        "facilities": "sports,cafeteria,library,comp labs,laboratory,gym,medical,hostel,bus"
      },
      {
        "name": "Guru Nanak College for Girls",
        "year_founded": 2002,
        "state": "Punjab",
        "city": "Muktsar",
        "facilities": ""
      },
      {
        "name": "Guru Nanak College of Arts Science and Commerce - [GNCASC]",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,wi-fi campus,classrooms,comp labs,laboratory,cafeteria,auditorium"
      },
      {
        "name": "Guru Nanak Girls College",
        "year_founded": 1970,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Guru Nanak Girls College",
        "year_founded": 1998,
        "state": "Haryana",
        "city": "Yamuna Nagar",
        "facilities": ""
      },
      {
        "name": "Guru Nanak Girls Post Graduate College",
        "year_founded": 1999,
        "state": "Uttarakhand",
        "city": "Udham Singh Nagar",
        "facilities": ""
      },
      {
        "name": "Guru Nanak Khalsa College",
        "year_founded": 1969,
        "state": "Haryana",
        "city": "Karnal",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Guru Nanak Khalsa College",
        "year_founded": 1968,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": ""
      },
      {
        "name": "Guru Nanak Khalsa College for Women",
        "year_founded": 1970,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": ""
      },
      {
        "name": "Guru Nanak Khalsa Girls College",
        "year_founded": 1978,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": ""
      },
      {
        "name": "Guru Nanak National College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "comp labs,sports,library,hostel,gym,medical,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Guru Nanak National College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,library,hostel"
      },
      {
        "name": "Guru Nanak Prem Karamsar College",
        "year_founded": 2000,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": ""
      },
      {
        "name": "Gurudev Arts and Science College - [GASC] Payyanur",
        "year_founded": 2002,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Gurukul Mahavidyalaya",
        "year_founded": null,
        "state": "Uttarakhand",
        "city": "Haridwar",
        "facilities": "library,medical,comp labs,cafeteria,gym,library,laboratory,auditorium"
      },
      {
        "name": "GDM College",
        "year_founded": 1979,
        "state": "Bihar",
        "city": "Harnaut",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Guwahati College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": ""
      },
      {
        "name": "Gyan Chand Shrivastava PG College",
        "year_founded": 1962,
        "state": "Madhya Pradesh",
        "city": "Damoh",
        "facilities": "sports,gym,cafeteria,library,auditorium,comp labs,medical,laboratory,hostel,classrooms,security"
      },
      {
        "name": "Gyan Jyoti College",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Siliguri",
        "facilities": ""
      },
      {
        "name": "Gyan Mahavidyalaya",
        "year_founded": 1998,
        "state": "Uttar Pradesh",
        "city": "Aligarh",
        "facilities": "sports,library,comp labs,laboratory,hostel,auditorium,cafeteria,medical,classrooms"
      },
      {
        "name": "Hem Chandra Dev Goswami College - [HCDG]",
        "year_founded": 1998,
        "state": "Assam",
        "city": "Sibsagar",
        "facilities": ""
      },
      {
        "name": "H.D. Jain College",
        "year_founded": 1942,
        "state": "Bihar",
        "city": "Arrah",
        "facilities": "library,gym,medical,comp labs,cafeteria,auditorium,laboratory,hostel,sports,classrooms"
      },
      {
        "name": "HDSD College",
        "year_founded": null,
        "state": "Tamil Nadu",
        "city": "Dharmapuri",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,hostel,sports,gym"
      },
      {
        "name": "H.H The Rajahs College (Autonomous)",
        "year_founded": 1981,
        "state": "Tamil Nadu",
        "city": "Pudukkottai",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,auditorium,sports"
      },
      {
        "name": "HJ Thim College of Arts and Science",
        "year_founded": 1991,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": ""
      },
      {
        "name": "HM Patel Institute of English Training and Research",
        "year_founded": 1965,
        "state": "Gujarat",
        "city": "Anand",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Haji Anfr Ali College",
        "year_founded": 2000,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": ""
      },
      {
        "name": "Haldia Government College",
        "year_founded": 1988,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Hamidia Girls Degree College",
        "year_founded": 1975,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": ""
      },
      {
        "name": "Handia Post Graduate College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": ""
      },
      {
        "name": "Handique Girls College",
        "year_founded": 1939,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "library,hostel,medical,sports,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Hans Raj College - [HRC]",
        "year_founded": 1948,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms,communication centre,security"
      },
      {
        "name": "Hans Raj Mahila Maha Vidyalaya - [HRMMV]",
        "year_founded": 1927,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Haqiqullah Chaudhary Mahavidyalaya - [HCC]",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Haringhata Mahavidyalaya",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms,medical"
      },
      {
        "name": "Hariom Saraswati Inter College",
        "year_founded": null,
        "state": "Uttarakhand",
        "city": "Haridwar",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Hariram College",
        "year_founded": 1965,
        "state": "Bihar",
        "city": "Siwan",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Harish Chandra Post Graduate College",
        "year_founded": 1866,
        "state": "Uttar Pradesh",
        "city": "Varanasi",
        "facilities": "medical,library,laboratory,comp labs,sports,auditorium,cafeteria"
      },
      {
        "name": "Harsh Mahila Mahavidyalaya",
        "year_founded": 2006,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": ""
      },
      {
        "name": "Hasanath College for Women - [HCW]",
        "year_founded": 1971,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,laboratory,library,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Hawabagh Women's College",
        "year_founded": 1928,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "classrooms,security,medical,comp labs,laboratory,library,sports,auditorium,cafeteria,hostel"
      },
      {
        "name": "Hazarilal Memorial Institute of Education and Technology - [HLMIET]",
        "year_founded": 1969,
        "state": "Uttar Pradesh",
        "city": "Bhaghpat",
        "facilities": "cafeteria,comp labs,library,laboratory,sports,hostel"
      },
      {
        "name": "Helena Kaushik Women's College",
        "year_founded": 1999,
        "state": "Rajasthan",
        "city": "Jhunjhunu",
        "facilities": ""
      },
      {
        "name": "Hemo Prova Borbora Girls' College",
        "year_founded": 1969,
        "state": "Assam",
        "city": "Golaghat",
        "facilities": ""
      },
      {
        "name": "Hemwati Nandan Bahuguna Government Post Graduate College",
        "year_founded": 1988,
        "state": "Uttarakhand",
        "city": "Udham Singh Nagar",
        "facilities": ""
      },
      {
        "name": "Henry Baker College Melukavu",
        "year_founded": 1991,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "hostel,comp labs,laboratory,medical,cafeteria,transport,auditorium,library,classrooms,sports"
      },
      {
        "name": "Heramba Chandra College",
        "year_founded": 1961,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "sports,medical,cafeteria,library,auditorium,classrooms,laboratory,comp labs"
      },
      {
        "name": "Himalayan Institute of Education and Technology - [HIET]",
        "year_founded": 2002,
        "state": "Uttarakhand",
        "city": "Chamoli",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Hindu College",
        "year_founded": 1899,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,hostel,auditorium,classrooms,security"
      },
      {
        "name": "Hindu College",
        "year_founded": 1949,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "comp labs,sports,cafeteria,library,medical,classrooms,laboratory,security,banks"
      },
      {
        "name": "Hindu Girls College",
        "year_founded": 1998,
        "state": "Haryana",
        "city": "Sonepat",
        "facilities": ""
      },
      {
        "name": "Hindu Kanya College",
        "year_founded": null,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Hindu Kanya Mahavidyala",
        "year_founded": 1970,
        "state": "Haryana",
        "city": "Jind",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Hindustan College of Arts and Science- [HICAS]",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Hiralal Bhakat College",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Birbhum",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Hiralal Mazumdar Memorial College for Women",
        "year_founded": 1959,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,comp labs,auditorium,sports,transport,classrooms,medical"
      },
      {
        "name": "Hislop College",
        "year_founded": 1883,
        "state": "Maharashtra",
        "city": "Nagpur",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,hostel,auditorium"
      },
      {
        "name": "Hitkarini Mahila Mahavidyalaya",
        "year_founded": 1993,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Holy Child BEd College",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "library,laboratory,comp labs,cafeteria,classrooms,security,hostel,medical,auditorium"
      },
      {
        "name": "Holy Cross College",
        "year_founded": 2009,
        "state": "Tripura",
        "city": "Agartala",
        "facilities": "library,laboratory,comp labs,transport,sports,cafeteria,medical"
      },
      {
        "name": "Holy Cross College  (Autonomous)",
        "year_founded": 1923,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "medical,cafeteria,sports,auditorium,comp labs,library,hostel"
      },
      {
        "name": "Holy Cross College (Autonomous) Nagercoil",
        "year_founded": 1965,
        "state": "Tamil Nadu",
        "city": "Kanyakumari",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Holy Cross Women's College",
        "year_founded": 1971,
        "state": "Chhattisgarh",
        "city": "Surguja",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Hooghly Women's College",
        "year_founded": 1949,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "library,laboratory,comp labs,auditorium,classrooms"
      },
      {
        "name": "Hutatma Rajguru Mahavidyalaya",
        "year_founded": 1977,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,sports,gym,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "IB Post Graduate College",
        "year_founded": 1956,
        "state": "Haryana",
        "city": "Panipat",
        "facilities": "library,laboratory,comp labs,auditorium,medical,cafeteria"
      },
      {
        "name": "ICLES Motilal Jhunjhunwala College",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Navi Mumbai",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "IDSG Government College",
        "year_founded": 1948,
        "state": "Karnataka",
        "city": "Chikmagalur",
        "facilities": "classrooms,library,laboratory,comp labs"
      },
      {
        "name": "IDEAL College For Advanced Studies",
        "year_founded": 1996,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "laboratory,comp labs,cafeteria,auditorium,hostel"
      },
      {
        "name": "Ideal Degree College",
        "year_founded": 2006,
        "state": "Uttar Pradesh",
        "city": "Barabanki",
        "facilities": "library,sports,classrooms,cafeteria,transport,comp labs,auditorium"
      },
      {
        "name": "Idhaya Arts and Science College for Women",
        "year_founded": 2004,
        "state": "Puducherry",
        "city": "Pondicherry",
        "facilities": "library,laboratory,comp labs,auditorium,classrooms,transport,cafeteria,hostel,sports"
      },
      {
        "name": "Idhaya College for Women",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Kumbakonam",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Ilahia College of Arts and Science",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Muvattupuzha",
        "facilities": "medical,cafeteria,library,auditorium,hostel,comp labs,transport,sports,laboratory"
      },
      {
        "name": "ILM College of Arts and Science",
        "year_founded": 2012,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,gym,sports,laboratory,hostel"
      },
      {
        "name": "Imayam College of Arts and Science",
        "year_founded": 2004,
        "state": "Tamil Nadu",
        "city": "Thuraiyur",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Immanuel College",
        "year_founded": 1994,
        "state": "Nagaland",
        "city": "Dimapur",
        "facilities": "library,laboratory,comp labs,cafeteria,medical,sports,auditorium"
      },
      {
        "name": "Imperial College of Professional Studies",
        "year_founded": null,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "library,sports,comp labs,auditorium,classrooms,cafeteria,gym"
      },
      {
        "name": "Imperial Institute of Management and Technology - [IIMT]",
        "year_founded": 2008,
        "state": "Uttarakhand",
        "city": "Nainital",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "India Christian Bible College",
        "year_founded": 2009,
        "state": "Kerala",
        "city": "Kochi",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Indian Academy Degree College - [IADC-A]",
        "year_founded": 1994,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,library,auditorium,hostel,comp labs,sports,cafeteria,laboratory,transport,security,classrooms"
      },
      {
        "name": "Indian Academy Evening College - [IAEC]",
        "year_founded": 2011,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,library,auditorium,hostel,comp labs,sports,cafeteria,laboratory,transport,security"
      },
      {
        "name": "Indian Institute of Public Health",
        "year_founded": 2008,
        "state": "Gujarat",
        "city": "Gandhi Nagar",
        "facilities": "library,laboratory,cafeteria,comp labs,auditorium,medical,classrooms,hostel,transport"
      },
      {
        "name": "Indian Institute of Public Health - [IIPH]",
        "year_founded": 2008,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium"
      },
      {
        "name": "Indian Institute of Public Health - [IIPH]",
        "year_founded": 2006,
        "state": "Haryana",
        "city": "Gurgaon",
        "facilities": "classrooms,comp labs,library,laboratory,medical,cafeteria,hostel,auditorium"
      },
      {
        "name": "Indian Management Academy - [IMA]",
        "year_founded": 2005,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,hostel"
      },
      {
        "name": "Indian National Portage Association - [INPA]",
        "year_founded": 2009,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": ""
      },
      {
        "name": "Indian Statistical Institute - [ISIBC]",
        "year_founded": 1960,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Indian Statistical Institute - [ISI]",
        "year_founded": 1931,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Indira Gandhi Government College",
        "year_founded": 2001,
        "state": "Arunachal Pradesh",
        "city": "Lohit",
        "facilities": ""
      },
      {
        "name": "Indira Gandhi Government Post Graduate College",
        "year_founded": 1980,
        "state": "Haryana",
        "city": "Fatehabad",
        "facilities": "library,comp labs"
      },
      {
        "name": "Indira Gandhi Institute of Physical Education and Sports Sciences - [IGIPESS]",
        "year_founded": 1987,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "library,laboratory,comp labs,cafeteria,gym,classrooms,auditorium,sports,medical"
      },
      {
        "name": "Indira Gandhi Women's College",
        "year_founded": 2000,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": ""
      },
      {
        "name": "Indore Christian College",
        "year_founded": 1887,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "sports,library,auditorium,cafeteria,comp labs,medical,classrooms"
      },
      {
        "name": "IPS Academy",
        "year_founded": 1994,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "sports,medical,library,auditorium,hostel,comp labs,cafeteria,classrooms"
      },
      {
        "name": "Indore School of Social Work",
        "year_founded": 1951,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "library,comp labs,classrooms,cafeteria"
      },
      {
        "name": "Indrapati Mahavidyalya",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Indraprastha College for Women - [IP]",
        "year_founded": 1924,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym"
      },
      {
        "name": "Institute for Excellence in Higher Education - [IEHE]",
        "year_founded": 1995,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,laboratory,hostel,classrooms"
      },
      {
        "name": "Institute of Archaeology",
        "year_founded": 1985,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Institute of Mathematics & Applications- [IMA]",
        "year_founded": 1999,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium,hostel,sports,classrooms"
      },
      {
        "name": "Iqbal College Peringammala",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,auditorium,sports"
      },
      {
        "name": "Isabella Thoburn Degree College - [ITDC]",
        "year_founded": 1870,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,library,cafeteria,auditorium,hostel,laboratory,gym,medical"
      },
      {
        "name": "JAT Arts Science and Commerce College for Women Malegaon",
        "year_founded": 1962,
        "state": "Maharashtra",
        "city": "Nashik",
        "facilities": ""
      },
      {
        "name": "JC DAV College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,cafeteria"
      },
      {
        "name": "Jagannath Jain College - [JJ]",
        "year_founded": 1960,
        "state": "Jharkhand",
        "city": "Kodarma",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "JJ College of Arts & Science (Autonomous)",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Pudukkottai",
        "facilities": "medical,cafeteria,library,hostel,auditorium,sports"
      },
      {
        "name": "Jagannath Kishore College -[J. K. College]",
        "year_founded": 1948,
        "state": "West Bengal",
        "city": "Purulia",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "JKC College",
        "year_founded": 1968,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "comp labs,sports,gym,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "JM Patel College of Arts Commerce and Science",
        "year_founded": 1964,
        "state": "Maharashtra",
        "city": "Bhandara",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "J.P. College of Arts and Science",
        "year_founded": 2007,
        "state": "Tamil Nadu",
        "city": "Tirunelveli",
        "facilities": "medical,library,auditorium,cafeteria,sports,comp labs,laboratory"
      },
      {
        "name": "JSS College of Arts and Commerce",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Chamarajnagar",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library"
      },
      {
        "name": "JSS College of Arts, Commerce and Science",
        "year_founded": 1964,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Jabalpur Public College - [JPC]",
        "year_founded": 1995,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Jagannath Barooah College",
        "year_founded": 1930,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": ""
      },
      {
        "name": "Jagat Narain Lal College - [JNL]",
        "year_founded": 1960,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Jagat Taran Girls Degree College",
        "year_founded": 1975,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": ""
      },
      {
        "name": "Jagiroad College",
        "year_founded": 1979,
        "state": "Assam",
        "city": "Marigaon",
        "facilities": ""
      },
      {
        "name": "Jagran College of Arts Science and Commerce",
        "year_founded": 2006,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "e-classroom,cafeteria,sports,library,comp labs"
      },
      {
        "name": "Jai Ganesh Shiv Sagar Mahila PG College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Faizabad",
        "facilities": ""
      },
      {
        "name": "Jai Hind College",
        "year_founded": 1948,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,medical,gym"
      },
      {
        "name": "Jai Prakash Mahila College",
        "year_founded": 1956,
        "state": "Bihar",
        "city": "Chapra",
        "facilities": "cafeteria,medical,classrooms,library"
      },
      {
        "name": "Jairam Arts & Scinence College",
        "year_founded": 1998,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Jamal Mohamed College - [JMC]",
        "year_founded": 1951,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel"
      },
      {
        "name": "Jamia Islahul Banaat",
        "year_founded": 2000,
        "state": "Uttarakhand",
        "city": "Haridwar",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Jamini Roy College",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Jamiya-Tul-Banat Women's Educational Institute",
        "year_founded": 1999,
        "state": "Jammu and Kashmir",
        "city": "Srinagar",
        "facilities": "medical,library,comp labs,cafeteria,auditorium,sports"
      },
      {
        "name": "Jamsab Computer Centre - [JCC]",
        "year_founded": 1991,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "medical,library,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Jamshedpur Women's College",
        "year_founded": 1953,
        "state": "Jharkhand",
        "city": "Jamshedpur",
        "facilities": "cafeteria,sports,library,comp labs,classrooms,hostel,laboratory,medical,auditorium"
      },
      {
        "name": "Janata Mahavidyalaya",
        "year_founded": 1958,
        "state": "Maharashtra",
        "city": "Chandrapur",
        "facilities": "hostel,cafeteria,sports,transport,library,auditorium,comp labs,gym"
      },
      {
        "name": "Jang Bahadur Rai Mahavidyalaya",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Ghazipur",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Jangi  Mahavidhyalaya",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "medical,library,auditorium,cafeteria,sports,comp labs"
      },
      {
        "name": "Janki Devi Memorial College  - [JDMC]",
        "year_founded": 1959,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Janseva Shikshan Mandal's Arts Commerce and Science College",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Thane",
        "facilities": "medical,library,cafeteria,auditorium,sports,comp labs,transport,laboratory"
      },
      {
        "name": "Janta Vidya Mandir Ganpat Rai Rasiwasia College - [JVMGRR]",
        "year_founded": 1965,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "medical,library,cafeteria,sports,auditorium,comp labs"
      },
      {
        "name": "Jawahar Bharati Degree & P.G College",
        "year_founded": 1951,
        "state": "Andhra Pradesh",
        "city": "Nellore",
        "facilities": "comp labs,library,sports,medical,hostel"
      },
      {
        "name": "Jawahar Lal Nehru Post Graduate College",
        "year_founded": 1966,
        "state": "Uttar Pradesh",
        "city": "Etah",
        "facilities": "comp labs,library,sports,cafeteria,laboratory,gym,classrooms,medical,banks"
      },
      {
        "name": "Jawaharlal Nehru College",
        "year_founded": 1964,
        "state": "Arunachal Pradesh",
        "city": "East Siang",
        "facilities": "comp labs,library,sports,hostel,medical"
      },
      {
        "name": "Jawaharlal Nehru Rajkeeya Mahavidyalaya - [JNRM]",
        "year_founded": 1967,
        "state": "Andaman and Nicobar Islands",
        "city": "Port Blair",
        "facilities": "laboratory,classrooms,library,hostel,gym,cafeteria,wi-fi campus,banks,comp labs,auditorium,sports"
      },
      {
        "name": "Jaya College of Arts and Science - [JCAS]",
        "year_founded": 1992,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,gym,comp labs,laboratory"
      },
      {
        "name": "Jayaprakash Institute of Social Change - [JPISC]",
        "year_founded": 1973,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "classrooms,medical,library"
      },
      {
        "name": "Jesus and Mary College - [JMC]",
        "year_founded": 1968,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Jhargram Raj College",
        "year_founded": 1949,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "medical,library,cafeteria,auditorium,comp labs,laboratory,sports,classrooms"
      },
      {
        "name": "Jhunjhunwala Post Graduate College - [JPGC]",
        "year_founded": 1993,
        "state": "Uttar Pradesh",
        "city": "Faizabad",
        "facilities": "medical,library,cafeteria,sports,auditorium,comp labs,laboratory,classrooms,wi-fi campus"
      },
      {
        "name": "Jijamata College of Science and Arts Bhende",
        "year_founded": 1992,
        "state": "Maharashtra",
        "city": "Ahmed Nagar",
        "facilities": "medical,library,cafeteria,sports,auditorium,hostel"
      },
      {
        "name": "O.P. Jindal Global University, Jindal School of Government and Public Policy - [JSGP]",
        "year_founded": 2012,
        "state": "Haryana",
        "city": "Sonepat",
        "facilities": "medical,library,cafeteria,sports,auditorium,hostel,comp labs"
      },
      {
        "name": "O.P. Jindal Global University, Jindal School of International Affairs - [JSIA]",
        "year_founded": 2011,
        "state": "Haryana",
        "city": "Sonepat",
        "facilities": "medical,library,cafeteria,sports,auditorium,comp labs,hostel"
      },
      {
        "name": "Jiral College",
        "year_founded": 1981,
        "state": "Orissa",
        "city": "Jagatsinghpur",
        "facilities": "medical,library,cafeteria,auditorium,laboratory,comp labs,sports"
      },
      {
        "name": "Jogesh Chandra Chaudhuri College",
        "year_founded": 1965,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "canteen,classrooms,laboratory,comp labs,medical,hostel"
      },
      {
        "name": "John Bosco Arts and Science College - [JBASC]",
        "year_founded": 2006,
        "state": "Tamil Nadu",
        "city": "Thiruvallur",
        "facilities": "laboratory,library,classrooms,medical,comp labs"
      },
      {
        "name": "Joya Gogoi College - [JGC]",
        "year_founded": 1991,
        "state": "Assam",
        "city": "Golaghat",
        "facilities": "medical,auditorium,cafeteria,library,sports,medical"
      },
      {
        "name": "Jugal Kishore Degree College",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Badaun",
        "facilities": "medical,library,comp labs,cafeteria,security,communication centre,classrooms"
      },
      {
        "name": "Justice Basheer Ahmed Sayeed  College For Women - [JBAS]",
        "year_founded": 1955,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "canteen,laboratory,classrooms,medical,swimming pool,sports,cafeteria,comp labs"
      },
      {
        "name": "Jyoti Nivas College - [JNC]",
        "year_founded": 1966,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,hostel,laboratory"
      },
      {
        "name": "KA Post Graduate College",
        "year_founded": 1963,
        "state": "Uttar Pradesh",
        "city": "Etah",
        "facilities": "library,medical,comp labs,laboratory,auditorium,cafeteria,classrooms"
      },
      {
        "name": "K.B. Jha College",
        "year_founded": 1976,
        "state": "Bihar",
        "city": "Katihar",
        "facilities": "cafeteria,library,laboratory,comp labs,hostel,gym,sports,classrooms"
      },
      {
        "name": "K B Postgraduate College",
        "year_founded": 1957,
        "state": "Uttar Pradesh",
        "city": "Mirzapur",
        "facilities": "cafeteria,library,laboratory,comp labs,sports"
      },
      {
        "name": "KB Women's College",
        "year_founded": 1963,
        "state": "Jharkhand",
        "city": "Hazaribagh",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,gym"
      },
      {
        "name": "Kishinchand Chellaram College - [KC College] Churchgate",
        "year_founded": 1954,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms,communication centre,gym,transport"
      },
      {
        "name": "KD College of Commerce & General Studies",
        "year_founded": 1961,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,classrooms,laboratory"
      },
      {
        "name": "KG College of Arts and Science - [KGCAS]",
        "year_founded": 2005,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,library,sports,medical,canteen,hostel,transport,classrooms,laboratory,auditorium"
      },
      {
        "name": "K J Somaiya College of Arts & Commerce - [KJSAC]",
        "year_founded": 1964,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "K.K. Das College",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "KKTM Government College",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Kodungallur",
        "facilities": "classrooms,gym,laboratory,auditorium,comp labs,medical,sports,canteen"
      },
      {
        "name": "KLE Society's S. Nijalingappa College - [KLESNC]",
        "year_founded": 1963,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel,classrooms,gym,e-classroom,laboratory,cafeteria"
      },
      {
        "name": "KLR Degree & PG College",
        "year_founded": 2001,
        "state": "Telangana",
        "city": "Khammam",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms,hostel"
      },
      {
        "name": "K.M.G. College of Arts and Science",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "sports,medical,auditorium,laboratory,library,cafeteria,comp labs,hostel"
      },
      {
        "name": "KMM College of Arts and Science Thrikkakara",
        "year_founded": 2008,
        "state": "Kerala",
        "city": "Cochin",
        "facilities": "medical,sports,comp labs,library,auditorium,cafeteria,classrooms,laboratory"
      },
      {
        "name": "Krishna Menon Memorial Govt. Women's College",
        "year_founded": 1975,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "medical,gym,sports,hostel,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "KNM Government Arts and Science College Kanjiramkulam",
        "year_founded": 1981,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "K.N.V.V. Sangha's Arts and Commerce College Kittur - [KNVVSACCK]",
        "year_founded": 1974,
        "state": "Karnataka",
        "city": "Belagavi",
        "facilities": "sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "KS College",
        "year_founded": null,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "medical,library,auditorium,cafeteria,sports,comp labs"
      },
      {
        "name": "K.S.G. College of Arts and Science",
        "year_founded": 2001,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "laboratory,library,hostel,transport,medical,classrooms"
      },
      {
        "name": "KSR College of Arts and Science College (Autonomous)",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Namakkal",
        "facilities": "sports,medical,library,auditorium,hostel,comp labs,cafeteria"
      },
      {
        "name": "K.T.H.M. College",
        "year_founded": 1969,
        "state": "Maharashtra",
        "city": "Nashik",
        "facilities": "comp labs,cafeteria,laboratory,library,medical,hostel,gym,sports,auditorium"
      },
      {
        "name": "Kaivalyadhama Yoga Institute",
        "year_founded": 1924,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "cafeteria,auditorium,hostel,canteen"
      },
      {
        "name": "Kakatiya Government Degree College",
        "year_founded": 1978,
        "state": "Telangana",
        "city": "Hanamkonda",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Kakching Khunou College",
        "year_founded": 1981,
        "state": "Manipur",
        "city": "Thoubal",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Kakojan College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Kalai Kaviri College of Fine Arts - [KKCFA]",
        "year_founded": 1996,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "cafeteria,library,auditorium,sports,comp labs,medical"
      },
      {
        "name": "Kaliabor College",
        "year_founded": 1969,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Kalindi College",
        "year_founded": 1967,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,transport"
      },
      {
        "name": "Kaliyaganj College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Uttar Dinajpur",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium,classrooms,hostel"
      },
      {
        "name": "Kalna College",
        "year_founded": 1943,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "comp labs,library,auditorium,medical,cafeteria,laboratory,sports,classrooms,hostel"
      },
      {
        "name": "Kalyan Post Graduate College",
        "year_founded": 1963,
        "state": "Chhattisgarh",
        "city": "Durg",
        "facilities": "comp labs,sports,medical,library,auditorium,classrooms,cafeteria,laboratory"
      },
      {
        "name": "Kalyani Mahavidyalaya",
        "year_founded": 1999,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "comp labs,library,canteen,medical,auditorium,sports,cafeteria,laboratory,classrooms,banks"
      },
      {
        "name": "Kamadhenu College of Arts & Science",
        "year_founded": 1996,
        "state": "Tamil Nadu",
        "city": "Dharmapuri",
        "facilities": "medical,library,comp labs,laboratory,auditorium,cafeteria,sports"
      },
      {
        "name": "Kamala Nehru College",
        "year_founded": 1964,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Kamala Nehru Memorial National College for Women - [KNMNC]",
        "year_founded": 1965,
        "state": "Karnataka",
        "city": "Shimoga",
        "facilities": "auditorium,cafeteria,medical,sports,library,comp labs,hostel,classrooms"
      },
      {
        "name": "Kamla Nehru College for Women - [KMC]",
        "year_founded": 1965,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": "medical,auditorium,cafeteria,library,comp labs,laboratory,sports"
      },
      {
        "name": "Kamla Nehru Post Graduate College - [KNPGC]",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "comp labs,library,canteen,auditorium,medical"
      },
      {
        "name": "Government Kamla Raja Girls Post Graduate Autonomous College",
        "year_founded": 1937,
        "state": "Madhya Pradesh",
        "city": "Gwalior",
        "facilities": "medical,laboratory,comp labs,cafeteria,auditorium,sports,hostel"
      },
      {
        "name": "Kanchan Singh Bhooli Devi Mahavidyalaya",
        "year_founded": 2001,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "canteen,library,comp labs,classrooms,gym,hostel,laboratory,sports"
      },
      {
        "name": "Kanchi Mamunivar Centre for Post Graduate Studies -   [KMCPGS]",
        "year_founded": 1989,
        "state": "Puducherry",
        "city": "Pondicherry",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium,classrooms,transport,hostel"
      },
      {
        "name": "Kandra Radha Kanta Kundu Mahavidyalaya",
        "year_founded": 2001,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "cafeteria,library,laboratory,comp labs,auditorium,sports,classrooms,medical"
      },
      {
        "name": "Kanhai Lal Sahu College - [KLS]",
        "year_founded": 1955,
        "state": "Bihar",
        "city": "Nawada",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,hostel"
      },
      {
        "name": "Kanoria College",
        "year_founded": 1951,
        "state": "Rajasthan",
        "city": "Jhunjhunu",
        "facilities": "medical,comp labs,laboratory,library,auditorium,cafeteria,sports,classrooms,hostel"
      },
      {
        "name": "Kanoria PG Mahila Mahavidyalaya",
        "year_founded": 1965,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "laboratory,comp labs,library,hostel,cafeteria,medical,gym,sports,auditorium"
      },
      {
        "name": "Kanya Mahavidyalaya",
        "year_founded": 1960,
        "state": "Uttar Pradesh",
        "city": "Bareilly",
        "facilities": "comp labs,library,canteen,auditorium,medical"
      },
      {
        "name": "Kanya Mahavidyalaya - [KMV]",
        "year_founded": 1886,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "medical,cafeteria,library,auditorium,canteen"
      },
      {
        "name": "Karanjia College",
        "year_founded": 1974,
        "state": "Orissa",
        "city": "Karanji",
        "facilities": "library,laboratory,comp labs,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Karavali College",
        "year_founded": 1996,
        "state": "Karnataka",
        "city": "Mangalore",
        "facilities": "medical,library,auditorium,hostel,comp labs,cafeteria,laboratory,classrooms"
      },
      {
        "name": "Kargil Shahid Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Etawah",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Karim City College - [KCC]",
        "year_founded": 1961,
        "state": "Jharkhand",
        "city": "Jamshedpur",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports,e-classroom"
      },
      {
        "name": "Karimganj College",
        "year_founded": 1946,
        "state": "Assam",
        "city": "Karimganj",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Karimpur Pannadevi College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "comp labs,library,medical,auditorium,security,cafeteria,laboratory,sports"
      },
      {
        "name": "Karpagam Arts And Science College",
        "year_founded": 1995,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": ""
      },
      {
        "name": "Kashiram Memorial Degree College",
        "year_founded": 2010,
        "state": "Uttar Pradesh",
        "city": "Bareilly",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Kasturba Gandhi Degree and PG College for Women",
        "year_founded": 1973,
        "state": "Telangana",
        "city": "Secunderabad",
        "facilities": "hostel,library,laboratory,auditorium,medical,cafeteria,sports,comp labs"
      },
      {
        "name": "Katni Arts and Commerce College - [KACC]",
        "year_founded": 2001,
        "state": "Madhya Pradesh",
        "city": "Katni",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Katwa College",
        "year_founded": 1960,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "cafeteria,library,laboratory,auditorium,comp labs,classrooms,sports,medical,gym,hostel"
      },
      {
        "name": "Kavishri Botadkar Arts and Commerce College",
        "year_founded": 1989,
        "state": "Gujarat",
        "city": "Bhavnagar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Kelkar Education Trust's V.G. Vaze College of Arts Science and Commerce",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "hostel,library,laboratory,comp labs,auditorium,cafeteria,gym,sports,medical"
      },
      {
        "name": "Keshav Mahavidyalaya",
        "year_founded": 1994,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Keshav Prasad Ralhi Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Sant Ravidas Nagar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Khadir Mohideen College - [KMC]",
        "year_founded": 1955,
        "state": "Tamil Nadu",
        "city": "Pudukkottai",
        "facilities": "sports,medical,library,auditorium,hostel"
      },
      {
        "name": "Khalisani Mahavidyalaya",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Khalsa College",
        "year_founded": 1892,
        "state": "Punjab",
        "city": "Amritsar",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium,wi-fi campus,security,hostel"
      },
      {
        "name": "Khalsa College",
        "year_founded": 1946,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "comp labs,sports,medical,laboratory,library,auditorium"
      },
      {
        "name": "Kharagpur College",
        "year_founded": 1949,
        "state": "West Bengal",
        "city": "Kharagpur",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel,sports,swimming pool,laboratory,e-classroom,classrooms,cafeteria"
      },
      {
        "name": "Kharupetia College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Darrang",
        "facilities": "cafeteria,library,laboratory,comp labs,auditorium"
      },
      {
        "name": "Khatra Adivasi Mahavidyalaya",
        "year_founded": 1979,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "medical,comp labs,laboratory,library,cafeteria,sports,classrooms"
      },
      {
        "name": "Khatu Shyam Institute of Management and Technology - [KSIMT]",
        "year_founded": 2007,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": ""
      },
      {
        "name": "Khejuri College",
        "year_founded": 1999,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "cafeteria,library,laboratory,comp labs,auditorium,medical,security,hostel,sports"
      },
      {
        "name": "Kholeshwar Mahavidyalaya",
        "year_founded": 1951,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs,transport"
      },
      {
        "name": "Khowang College",
        "year_founded": 1982,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Khudiram Bose Central College",
        "year_founded": 1893,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,cafeteria,library,auditorium,sports,medical,hostel"
      },
      {
        "name": "Khun Khun ji Girls PG College",
        "year_founded": 1893,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "sports,medical,library,comp labs,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Kilakarai Bukhari Aalim Arabic College",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel"
      },
      {
        "name": "Kirori Mal College - [KMC]",
        "year_founded": 1954,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,classrooms,medical,hostel,gym,banks,communication centre,e-classroom"
      },
      {
        "name": "Kirti M Doongursee College of Arts Science and Commerce",
        "year_founded": 1954,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,library,laboratory,auditorium,cafeteria,medical,sports,gym,hostel,classrooms,security"
      },
      {
        "name": "Kisan Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "library,canteen,medical,auditorium,comp labs"
      },
      {
        "name": "Kisan Post Graduate College",
        "year_founded": 1956,
        "state": "Uttar Pradesh",
        "city": "Ghaziabad",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Kishan Lal Public College",
        "year_founded": 1964,
        "state": "Haryana",
        "city": "Rewari",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Kishore Nagar College",
        "year_founded": 1979,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Kittel Arts College",
        "year_founded": 1988,
        "state": "Karnataka",
        "city": "Dharwad",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs,laboratory,classrooms,security"
      },
      {
        "name": "Kohima College",
        "year_founded": 1967,
        "state": "Nagaland",
        "city": "Kohima",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel"
      },
      {
        "name": "Kokrajhar Government College",
        "year_founded": 1959,
        "state": "Assam",
        "city": "Kokrajhar",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Kongu Arts and Science College - [KASC]",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Erode",
        "facilities": "library,laboratory,comp labs,classrooms,auditorium,communication centre,hostel,transport"
      },
      {
        "name": "Kongunadu Arts and Science College",
        "year_founded": 1973,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "library,laboratory,classrooms,auditorium,hostel,comp labs,medical"
      },
      {
        "name": "KothaKota Sri Vidya Degree College",
        "year_founded": 2003,
        "state": "Telangana",
        "city": "Mahabub Nagar",
        "facilities": "library,laboratory,comp labs,auditorium,sports,cafeteria,medical"
      },
      {
        "name": "Krishnasamy College of Science Arts and Management for Women",
        "year_founded": 2007,
        "state": "Tamil Nadu",
        "city": "Cuddalore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Kuchinda College",
        "year_founded": 1964,
        "state": "Orissa",
        "city": "Kuchinda",
        "facilities": "comp labs,library,canteen,medical,auditorium,classrooms,laboratory,security,hostel"
      },
      {
        "name": "Kumaon Kesari Pt Badridutt Pandey Government Post Graduate College",
        "year_founded": 1974,
        "state": "Uttarakhand",
        "city": "Bageshwar",
        "facilities": "comp labs,sports,library,auditorium,medical,canteen"
      },
      {
        "name": "Kumari Vidyavati Anand DAV College for Women",
        "year_founded": 1958,
        "state": "Haryana",
        "city": "Karnal",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Kunthavai Naacchiyar Government Arts College for Women - [KNGAC]",
        "year_founded": 1966,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "library,laboratory,comp labs,auditorium,medical,cafeteria"
      },
      {
        "name": "Kuriakose Elias College Mannanam",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,laboratory,library,auditorium,sports,gym,hostel,medical"
      },
      {
        "name": "Kuriakose Gregorios College",
        "year_founded": 1981,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Kurinji College of Arts and Science",
        "year_founded": null,
        "state": "Tamil Nadu",
        "city": "Thiruchirapalli",
        "facilities": "medical,cafeteria,library,auditorium,laboratory,comp labs"
      },
      {
        "name": "Kurseong College",
        "year_founded": 1967,
        "state": "West Bengal",
        "city": "Kurseong",
        "facilities": "hostel,canteen,medical,comp labs,auditorium,library,sports"
      },
      {
        "name": "L and C Mehta Arts College",
        "year_founded": 1953,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Lal Bahadur Shastri Post Graduate College - [LBSPG]",
        "year_founded": 1966,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "sports,medical,cafeteria,library,auditorium,laboratory,comp labs,classrooms,transport,hostel"
      },
      {
        "name": "LD Arts College",
        "year_founded": 1937,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,comp labs,hostel,medical,classrooms,laboratory,cafeteria,e-classroom,auditorium,sports"
      },
      {
        "name": "LN Sahu Mahavidyalaya",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "L.R.G Government Arts College for Women",
        "year_founded": 1971,
        "state": "Tamil Nadu",
        "city": "Tiruppur",
        "facilities": "medical,library,comp labs"
      },
      {
        "name": "Langat Singh College - [LS]",
        "year_founded": 1899,
        "state": "Bihar",
        "city": "Muzaffarpur",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,comp labs,laboratory,classrooms"
      },
      {
        "name": "L.S. Raheja College of Arts and Commerce",
        "year_founded": 2010,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "cafeteria,library,laboratory,medical,sports,comp labs,classrooms,banks"
      },
      {
        "name": "Lady Brabourne College - [LBC]",
        "year_founded": 1939,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "hostel,library,laboratory,comp labs,auditorium,medical,cafeteria,gym,sports,security,classrooms"
      },
      {
        "name": "Lady Shri Ram College for Women - [LSR]",
        "year_founded": 1956,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,laboratory,classrooms,banks"
      },
      {
        "name": "Lajpat Rai DAV College",
        "year_founded": 1959,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,hostel,library,laboratory,sports,gym"
      },
      {
        "name": "Lakhimpur Girls' College",
        "year_founded": 1972,
        "state": "Assam",
        "city": "Lakhimpur",
        "facilities": "comp labs,library,canteen,medical,auditorium,sports,hostel,classrooms,cafeteria"
      },
      {
        "name": "Lakshmibai National College of Physical Education",
        "year_founded": 1985,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "comp labs,library,hostel,auditorium,sports,medical,cafeteria"
      },
      {
        "name": "Lakshmipuram College of Arts and Science",
        "year_founded": 1964,
        "state": "Tamil Nadu",
        "city": "Kanyakumari",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs,classrooms,e-classroom,laboratory"
      },
      {
        "name": "Lal Bahadur College",
        "year_founded": 1970,
        "state": "Telangana",
        "city": "Warangal",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Lal Bahadur Shastri Government Degree College",
        "year_founded": 1986,
        "state": "Himachal Pradesh",
        "city": "Shimla",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Lal Bahadur Shastri PG College",
        "year_founded": 1963,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "cafeteria,library,laboratory,comp labs,sports,hostel"
      },
      {
        "name": "Lalgola College",
        "year_founded": 2005,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium,security,classrooms"
      },
      {
        "name": "Lalit Chandra Bharali College",
        "year_founded": 1971,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Lanka Mahavidyalaya",
        "year_founded": 1979,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Laxmi Venkatesh Desai College - [LVD]",
        "year_founded": 1954,
        "state": "Karnataka",
        "city": "Raichur",
        "facilities": "library,laboratory,comp labs,cafeteria,medical,sports,classrooms"
      },
      {
        "name": "Ledo College",
        "year_founded": 1997,
        "state": "Assam",
        "city": "Tinsukia",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Little Flower College Guruvayoor",
        "year_founded": 1955,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,hostel,canteen,wi-fi campus,medical"
      },
      {
        "name": "Little Flower Institute of Social Sciences and Health - [LISSAH]",
        "year_founded": 2003,
        "state": "Kerala",
        "city": "Calicut",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ln. G.V. Rao Modern Degree College",
        "year_founded": 1994,
        "state": "Andhra Pradesh",
        "city": "Ramachandrapuram",
        "facilities": "library,comp labs,laboratory,sports,auditorium,cafeteria,classrooms,communication centre"
      },
      {
        "name": "Loganatha Narayanasamy Government College",
        "year_founded": 1965,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "cafeteria,comp labs,library,laboratory,hostel"
      },
      {
        "name": "Lok Mahavidyalaya",
        "year_founded": 1987,
        "state": "Maharashtra",
        "city": "Wardha",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Lokmani Memorial Degree College",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Bijnor",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Lokseva Education Society's Arts and Science College",
        "year_founded": 1997,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,medical,e-classroom,classrooms"
      },
      {
        "name": "Lord Buddha Post Graduate College",
        "year_founded": 2000,
        "state": "Uttar Pradesh",
        "city": "Bahraich",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Lords Universal College",
        "year_founded": 2003,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,classrooms,e-classroom,auditorium,security"
      },
      {
        "name": "Loreto College",
        "year_founded": 1912,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "cafeteria,library,laboratory,hostel,sports,medical,classrooms,security,comp labs,auditorium"
      },
      {
        "name": "Lorven School of Social Sciences",
        "year_founded": 2003,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,hostel,library,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Loyola Academy Degree and PG College",
        "year_founded": 1976,
        "state": "Telangana",
        "city": "Secunderabad",
        "facilities": "hostel,library,laboratory,comp labs,medical,auditorium,cafeteria,gym,sports"
      },
      {
        "name": "Loyola College",
        "year_founded": 1925,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "sports,medical,library,auditorium,hostel,laboratory,comp labs,cafeteria,security,classrooms"
      },
      {
        "name": "Loyola College of Social Sciences",
        "year_founded": 1963,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "comp labs,library,canteen,medical"
      },
      {
        "name": "Lucknow Christian Degree College",
        "year_founded": 1862,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "sports,cafeteria,library,auditorium,gym,medical,hostel,laboratory,comp labs,classrooms,transport,banks"
      },
      {
        "name": "MBL Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MDK Girls College - [MDKG]",
        "year_founded": 1885,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": ""
      },
      {
        "name": "MDSD Girls College",
        "year_founded": 1980,
        "state": "Haryana",
        "city": "Ambala",
        "facilities": ""
      },
      {
        "name": "M.E.S. Asmabi College",
        "year_founded": 1968,
        "state": "Kerala",
        "city": "Kodungallur",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,sports,gym,hostel"
      },
      {
        "name": "MES College Nedumkandam",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Idukki",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "MES College of Arts, Commerce & Science",
        "year_founded": 1956,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "library,laboratory,canteen,comp labs,banks,medical,auditorium,classrooms,cafeteria,swimming pool"
      },
      {
        "name": "MES Kalladi College",
        "year_founded": 1967,
        "state": "Kerala",
        "city": "Mannarkad",
        "facilities": "medical,cafeteria,library,auditorium,comp labs,laboratory,classrooms,e-classroom,sports"
      },
      {
        "name": "MES Keveeyam College Valanchery",
        "year_founded": 1981,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym,transport"
      },
      {
        "name": "M.E.S Ponnani College",
        "year_founded": 1968,
        "state": "Kerala",
        "city": "Ponani",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,canteen,hostel"
      },
      {
        "name": "MES Arts and Science College",
        "year_founded": 2005,
        "state": "Kerala",
        "city": "Nilambur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MET Arts and Science College Nadapuram",
        "year_founded": 2002,
        "state": "Kerala",
        "city": "Calicut",
        "facilities": "library,comp labs,laboratory,cafeteria,medical,classrooms"
      },
      {
        "name": "MM Chaudhari Arts CollegeMM Chaudhari Arts College",
        "year_founded": 1996,
        "state": "Gujarat",
        "city": "Sabarkantha",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MMES Women's Arts and Science College",
        "year_founded": 2007,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "library,comp labs,laboratory,auditorium,cafeteria,sports,medical,wi-fi campus,classrooms,e-classroom"
      },
      {
        "name": "M.O.P. Vaishnav College for Women",
        "year_founded": 1992,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "M P Arts and M H Commerce College for Women - [MPAMHCCW]",
        "year_founded": 1973,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,comp labs,sports,cafeteria,auditorium,medical,gym"
      },
      {
        "name": "MP Garg Degree College",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MP Govt College",
        "year_founded": 1970,
        "state": "Himachal Pradesh",
        "city": "Una",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MP Moothedath Memorial Sree Narayana Trusts College",
        "year_founded": null,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "auditorium,hostel,library,canteen,laboratory,comp labs"
      },
      {
        "name": "Maharaja Purna Chandra Autonomous College - [MPC]",
        "year_founded": 1948,
        "state": "Orissa",
        "city": "Baripada",
        "facilities": "cafeteria,library,laboratory,comp labs,auditorium,hostel,medical,classrooms,sports"
      },
      {
        "name": "M.P.E. Society's S.D.M. College of Arts, Science and Commerce - [SDMC]",
        "year_founded": 1964,
        "state": "Karnataka",
        "city": "Honavar",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms,transport"
      },
      {
        "name": "Ramaiah College of Arts, Science and Commerce - [RCASC]",
        "year_founded": 1994,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "hostel,library,laboratory,comp labs,auditorium,medical,gym,sports,cafeteria"
      },
      {
        "name": "MSP Mandal Arts Science and Commerce College",
        "year_founded": 1972,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "MSP Mandal's Shiv Chhatrapati College",
        "year_founded": null,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "M.T.B. Arts College",
        "year_founded": 1918,
        "state": "Gujarat",
        "city": "Surat",
        "facilities": "medical,gym,sports,library,laboratory,hostel,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Maharajadhiraj Uday Chand Women's College - [MUC]",
        "year_founded": 1955,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "M.V. College",
        "year_founded": 1958,
        "state": "Bihar",
        "city": "Buxar",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms"
      },
      {
        "name": "Ma'din Arts and Science College",
        "year_founded": 2008,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "medical,classrooms,library"
      },
      {
        "name": "Maa Durga College Mahavidhyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Agra",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,medical,classrooms"
      },
      {
        "name": "Maa Omwati Degree College - [MODC]",
        "year_founded": 2007,
        "state": "Haryana",
        "city": "Palwal",
        "facilities": ""
      },
      {
        "name": "Madeenathul Uloom Arabic College - [MUAC] Pulikkal",
        "year_founded": 1946,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "library,comp labs,laboratory,hostel,classrooms"
      },
      {
        "name": "Madhab Choudhury College",
        "year_founded": 1939,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Madhava Pai Memorial College - [MPMC] Manipal",
        "year_founded": 1999,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": ""
      },
      {
        "name": "Madras Christian College - [MCC]",
        "year_founded": 1837,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "sports,auditorium,medical,comp labs,hostel,library,laboratory,gym"
      },
      {
        "name": "Madura College",
        "year_founded": 1889,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "sports,medical,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Madurai Diraviyam Thayumanavar Hindu College",
        "year_founded": 1859,
        "state": "Tamil Nadu",
        "city": "Tirunelveli",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Madurai Institute of Social Sciences - [MISS]",
        "year_founded": 1969,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "hostel,gym,library,comp labs,classrooms,transport,auditorium,medical,canteen,cafeteria"
      },
      {
        "name": "Madurai Sivakasi Nadars Pioneer Meenakshi Women's College",
        "year_founded": 1999,
        "state": "Tamil Nadu",
        "city": "Sivaganga",
        "facilities": "medical,library,auditorium,cafeteria,sports,laboratory,comp labs"
      },
      {
        "name": "MIT-WPU Faculty of Liberal Arts, Science & Commerce, Kothrud",
        "year_founded": 2004,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,classrooms,security"
      },
      {
        "name": "Magadh Mahila College",
        "year_founded": 1946,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "cafeteria,hostel,library,laboratory,auditorium,sports,comp labs,classrooms,medical,transport,banks"
      },
      {
        "name": "Mahadev Desai Samajseva Mahavidyalaya",
        "year_founded": 1965,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Mahadev Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Varanasi",
        "facilities": ""
      },
      {
        "name": "Mahadevananda Mahavidyalaya",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports,classrooms,security"
      },
      {
        "name": "Mahakal Institute of Technology and Science - [MITS]",
        "year_founded": 2006,
        "state": "Madhya Pradesh",
        "city": "Ujjain",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,transport,classrooms,banks"
      },
      {
        "name": "Mahant Laxminarayan Das College",
        "year_founded": 1997,
        "state": "Chhattisgarh",
        "city": "Raipur",
        "facilities": "medical,classrooms,cafeteria,auditorium,library,laboratory,sports"
      },
      {
        "name": "Maharaja Agrasen P.G .College for Women",
        "year_founded": 1984,
        "state": "Haryana",
        "city": "Jhajjar",
        "facilities": "comp labs,cafeteria,laboratory,library"
      },
      {
        "name": "Maharaja Agrasen College - [MAC]",
        "year_founded": 1994,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,security"
      },
      {
        "name": "Maharaja CoEducation College of Arts & Science",
        "year_founded": 1990,
        "state": "Tamil Nadu",
        "city": "Erode",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,hostel,laboratory"
      },
      {
        "name": "Maharaja Harish Chandra Post Graduate College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Maharaja Madakarinayaka First Grade College - [MM]",
        "year_founded": 1984,
        "state": "Karnataka",
        "city": "Chitradurga",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Maharaja Manindra Chandra College",
        "year_founded": 1941,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Maharaja Prithviraj Chauhan Mahavidyalaya",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Rampur",
        "facilities": "library,laboratory,comp labs,cafeteria,medical,classrooms,e-classroom,sports"
      },
      {
        "name": "Maharaja Ranjit Singh College of Professional Sciences - [MRSC]",
        "year_founded": 1994,
        "state": "Madhya Pradesh",
        "city": "Indore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Maharaja Sris Chandra College",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,classrooms,security,auditorium,hostel"
      },
      {
        "name": "Maharaja's College",
        "year_founded": 1875,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms,e-classroom"
      },
      {
        "name": "Maharajah's College",
        "year_founded": 1879,
        "state": "Andhra Pradesh",
        "city": "Vizianagaram",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical,security,banks,sports"
      },
      {
        "name": "Maharajah's Post Graduate Colleges - [MRPG]",
        "year_founded": 1987,
        "state": "Andhra Pradesh",
        "city": "Vizianagaram",
        "facilities": "medical,cafeteria,hostel,library,auditorium,sports,comp labs,classrooms"
      },
      {
        "name": "Maharajashri Bhagavatsinhji Arts and Commerce College",
        "year_founded": 1959,
        "state": "Gujarat",
        "city": "Rajkot",
        "facilities": "classrooms,communication centre,canteen,library,laboratory,medical"
      },
      {
        "name": "Maharani Janki Kunwar College - [MJK]",
        "year_founded": 1955,
        "state": "Bihar",
        "city": "Bettiah",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Maharani Kishori Jat Kanya Mahavidyalya",
        "year_founded": 1998,
        "state": "Haryana",
        "city": "Rohtak",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,hostel"
      },
      {
        "name": "Maharani Lakshmi Ammanni College for Women - [MLACW]",
        "year_founded": 1972,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel,classrooms,laboratory,e-classroom,cafeteria,banks"
      },
      {
        "name": "Maharani Laxmi Bai Government College of Excellence - [MLB]",
        "year_founded": 1887,
        "state": "Madhya Pradesh",
        "city": "Gwalior",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Maharanis Arts and Science College For Women",
        "year_founded": 1919,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "classrooms,canteen,comp labs,library,laboratory,medical"
      },
      {
        "name": "Maharashtra College of Science and Commerce - [MCSC] Kothrud",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "comp labs,laboratory,library"
      },
      {
        "name": "Maharshi Dayanand College  of Arts Science and  Commerce",
        "year_founded": 1975,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "hostel,security,medical,laboratory,comp labs,library,classrooms,sports,auditorium"
      },
      {
        "name": "Mahatma Fule Arts Comm and Sitaramji Choudhari Science Mahavidyalaya",
        "year_founded": 1960,
        "state": "Maharashtra",
        "city": "Amravati",
        "facilities": "library,laboratory,gym,medical,auditorium,cafeteria,comp labs,hostel"
      },
      {
        "name": "Mahatma Gandhi College",
        "year_founded": 1992,
        "state": "Kerala",
        "city": "Trivandrum",
        "facilities": "sports,medical,auditorium,hostel,comp labs,cafeteria,library,laboratory,classrooms"
      },
      {
        "name": "Mahatma Gandhi Government College",
        "year_founded": 1994,
        "state": "Andaman and Nicobar Islands",
        "city": "Andaman",
        "facilities": "comp labs,cafeteria,library,laboratory,auditorium,sports,gym,medical,hostel"
      },
      {
        "name": "Mahatma Gandhi Memorial College - [MGM]",
        "year_founded": 1949,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "comp labs,library,auditorium,laboratory,gym,cafeteria,medical,hostel"
      },
      {
        "name": "Mahatma Gandhi Missions Junior College of Education - [MGM]",
        "year_founded": 1990,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "medical,library,auditorium,hostel,laboratory,comp labs,cafeteria,gym"
      },
      {
        "name": "Mahatma Gandhi PG College",
        "year_founded": 1971,
        "state": "Uttar Pradesh",
        "city": "Fatehpur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Mahatma Night Degree College of Arts and Commerce",
        "year_founded": 2000,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,laboratory,auditorium,comp labs,cafeteria,gym,medical,sports,hostel,classrooms,security"
      },
      {
        "name": "Mahavir  Mahavidyalaya",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "cafeteria,comp labs,medical,library,laboratory,sports,hostel,gym"
      },
      {
        "name": "Mahendra Arts and Science College",
        "year_founded": 1999,
        "state": "Tamil Nadu",
        "city": "Namakkal",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Maheshtala College",
        "year_founded": 1971,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,gym,medical,laboratory,library,classrooms,security,auditorium,cafeteria"
      },
      {
        "name": "Maheshwari College of Commerce and Arts",
        "year_founded": 2010,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "comp labs,sports,medical,cafeteria,library,laboratory,auditorium,gym,hostel"
      },
      {
        "name": "Mahila Arts and Commerce College",
        "year_founded": 1991,
        "state": "Gujarat",
        "city": "Sabarkantha",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Mahila PG College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Bahraich",
        "facilities": "classrooms,comp labs,library,laboratory,medical,auditorium,sports"
      },
      {
        "name": "Mahima Mahavidyalaya",
        "year_founded": 1978,
        "state": "Orissa",
        "city": "Jagatsinghpur",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Mahishadal Girl's College",
        "year_founded": 1969,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "classrooms,comp labs,library,laboratory,medical,cafeteria,security,hostel,transport,auditorium"
      },
      {
        "name": "Mahishadal Raj College",
        "year_founded": 1946,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical,hostel"
      },
      {
        "name": "Maitreyi College",
        "year_founded": 1967,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms,wi-fi campus"
      },
      {
        "name": "Majlis Arts and Science College Puramannur",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "hostel,medical,library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Majma'a  Arts College",
        "year_founded": 1997,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": ""
      },
      {
        "name": "Major Shiv Dayal Singh Mahavidyalaya",
        "year_founded": 1986,
        "state": "Uttar Pradesh",
        "city": "Farrukhabad",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Majuli College",
        "year_founded": 1962,
        "state": "Assam",
        "city": "Jorhat",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical"
      },
      {
        "name": "Malankara Catholic College",
        "year_founded": 1998,
        "state": "Tamil Nadu",
        "city": "Kanyakumari",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Malda College",
        "year_founded": 1944,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "library,hostel,comp labs,laboratory,cafeteria,medical,sports,auditorium"
      },
      {
        "name": "Malda Women's College",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "wi-fi campus,hostel,medical,sports,cafeteria,laboratory,library,classrooms,auditorium"
      },
      {
        "name": "Mallamma Marimallappa Women's Arts and Commerce College",
        "year_founded": 1982,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "comp labs,library,sports,classrooms,cafeteria"
      },
      {
        "name": "Maltidhari College",
        "year_founded": 1956,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "comp labs,laboratory,medical,sports,classrooms,library,auditorium,cafeteria"
      },
      {
        "name": "Malyagiri Mahavidyalaya",
        "year_founded": 1979,
        "state": "Orissa",
        "city": "Angul",
        "facilities": "cafeteria,comp labs,library,laboratory,auditorium,hostel,medical,sports"
      },
      {
        "name": "Manbhum Mahavidyalaya",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Manbazar",
        "facilities": "comp labs,library,auditorium,laboratory,sports,medical,gym,hostel"
      },
      {
        "name": "Maniben Nanavati Women's College - [MNWC]",
        "year_founded": 1972,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": ""
      },
      {
        "name": "Manikya Lal Verma Govt College",
        "year_founded": 1988,
        "state": "Rajasthan",
        "city": "Bhilwara",
        "facilities": "classrooms,canteen,communication centre,comp labs,library,laboratory,medical,transport,sports,hostel,auditorium"
      },
      {
        "name": "Mannar Thirumalai Naicker College",
        "year_founded": 1974,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "medical,cafeteria,library,auditorium,hostel,laboratory,comp labs"
      },
      {
        "name": "Mannu Lal Dwivedi Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Auraiya",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Manohar Lal Mahavidhyalaya",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,communication centre"
      },
      {
        "name": "Manyavar Kanshiram Govt Degree College",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Ghaziabad",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,hostel,medical,gym"
      },
      {
        "name": "Mar Augusthinose College Ramapuram",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "comp labs,sports,gym,cafeteria,laboratory,library"
      },
      {
        "name": "Mar Dionysius College Pazhanji",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "medical,cafeteria,library,auditorium,comp labs,sports,laboratory"
      },
      {
        "name": "Mar Ivanios College",
        "year_founded": 1949,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "comp labs,library,laboratory,bus,auditorium,transport,medical,cafeteria,classrooms,sports"
      },
      {
        "name": "Mar Thoma College",
        "year_founded": 1952,
        "state": "Kerala",
        "city": "Tiruvalla",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Mar Thoma Theological Seminary",
        "year_founded": 1813,
        "state": "Kerala",
        "city": "Kottayam",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Maratha Mandal's Arts and Commerce College - [MMACC] Khanapur",
        "year_founded": 1979,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Margherita College",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Tinsukia",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Mariahu Post Graduate College",
        "year_founded": 1969,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Markanda National College",
        "year_founded": 2000,
        "state": "Haryana",
        "city": "Kurukshetra",
        "facilities": "library,laboratory,comp labs,cafeteria,gym,medical,sports,auditorium,hostel"
      },
      {
        "name": "Marshaghai College",
        "year_founded": 1998,
        "state": "Orissa",
        "city": "Kendrapara",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,hostel,gym,sports,laboratory"
      },
      {
        "name": "Marudhar Kesari Jain College for Women - [MKJC]",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Vellore",
        "facilities": "medical,library,auditorium,hostel,comp labs,sports,cafeteria,laboratory"
      },
      {
        "name": "Marwari College",
        "year_founded": null,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,sports,gym,laboratory,transport,hostel,communication centre"
      },
      {
        "name": "Mary Matha Arts And Science College",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Manantahvady",
        "facilities": "classrooms,canteen,comp labs,communication centre,library,laboratory,medical"
      },
      {
        "name": "Mary Matha College",
        "year_founded": 1994,
        "state": "Tamil Nadu",
        "city": "Theni",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Maryada Purusottam PG College",
        "year_founded": 1972,
        "state": "Uttar Pradesh",
        "city": "Mau",
        "facilities": "classrooms,canteen,comp labs,communication centre,library,laboratory,medical"
      },
      {
        "name": "Mass College of Arts and Science",
        "year_founded": null,
        "state": "Tamil Nadu",
        "city": "Thanjavur",
        "facilities": "cafeteria,transport,auditorium,medical,library,comp labs,sports"
      },
      {
        "name": "Master Tara Singh Memorial College for Women",
        "year_founded": 1968,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Mata Gujri College",
        "year_founded": 1957,
        "state": "Punjab",
        "city": "Fatehgarh Sahib",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Mata Gujri Mahila Mahavidyalaya - [MGMM]",
        "year_founded": 1994,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "comp labs,laboratory,library,auditorium,cafeteria,classrooms,medical,sports"
      },
      {
        "name": "Mata Sahib Kaur Girls College",
        "year_founded": 1997,
        "state": "Punjab",
        "city": "Bathinda",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,hostel,medical,gym,auditorium,communication centre,transport"
      },
      {
        "name": "Mata Sundri College for Women",
        "year_founded": 1967,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,hostel,transport,communication centre,classrooms"
      },
      {
        "name": "Mathabhanga College",
        "year_founded": 1969,
        "state": "West Bengal",
        "city": "Cooch Behar",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms,security"
      },
      {
        "name": "Maulana Azad College - [MAC]",
        "year_founded": 1926,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,classrooms,security,laboratory,hostel"
      },
      {
        "name": "Meenakshi Ammal Arts & Science College - [MAASC]",
        "year_founded": 2001,
        "state": "Tamil Nadu",
        "city": "Kanchipuram",
        "facilities": "library,comp labs,laboratory,gym,cafeteria,medical,hostel,auditorium,sports,communication centre"
      },
      {
        "name": "Meenakshi College for Women",
        "year_founded": 1975,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Meerut College",
        "year_founded": 1892,
        "state": "Uttar Pradesh",
        "city": "Meerut",
        "facilities": ""
      },
      {
        "name": "Megh Baran Singh College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Ghazipur",
        "facilities": "library,laboratory,cafeteria,auditorium,sports,medical,gym,hostel,comp labs"
      },
      {
        "name": "Mehr Chand Mahajan Dayanand Anglo Vedic College for Women - [MCM DAV]",
        "year_founded": 1968,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "comp labs,sports,gym,laboratory,library,auditorium,cafeteria,hostel,medical"
      },
      {
        "name": "Mercy College",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Michael Madhusudan Memorial College",
        "year_founded": 1996,
        "state": "West Bengal",
        "city": "Durgapur",
        "facilities": "library,laboratory,auditorium,comp labs,cafeteria,sports,medical,classrooms"
      },
      {
        "name": "Milagres College",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "library,hostel,cafeteria,auditorium,comp labs,medical,sports"
      },
      {
        "name": "Milli Al-Ameen College for Girls",
        "year_founded": 2000,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Milliya Arts Science and Management science College",
        "year_founded": 1991,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "library,hostel,auditorium,sports,medical,cafeteria,comp labs"
      },
      {
        "name": "Minerva College of Arts and Science",
        "year_founded": 2010,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "library,hostel,cafeteria,sports,medical,auditorium,comp labs"
      },
      {
        "name": "Minority Arts and Science College",
        "year_founded": 2005,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Miracle Educational Society Group of Institutions",
        "year_founded": 2009,
        "state": "Andhra Pradesh",
        "city": "Vizianagaram",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Miraj Mahavidyalaya",
        "year_founded": 1993,
        "state": "Maharashtra",
        "city": "Sangli",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Miranda House College",
        "year_founded": 1948,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "sports,cafeteria,medical,library,auditorium,hostel,transport,comp labs,laboratory,communication centre,classrooms"
      },
      {
        "name": "Mithibai College of Arts",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,classrooms,hostel,gym"
      },
      {
        "name": "Modern College of Arts Science and Commerce - [MCASC] Shivajinagar",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "hostel,library,laboratory,comp labs,auditorium,cafeteria,medical,gym,sports,classrooms"
      },
      {
        "name": "Mohamed Abdurahiman Memorial Orphanage College - [MAMOC] Manassery",
        "year_founded": 2002,
        "state": "Kerala",
        "city": "Kozhikode",
        "facilities": "medical,library,comp labs,sports,auditorium,cafeteria,laboratory,classrooms,security"
      },
      {
        "name": "Mohamed Sathak College of Arts and Science",
        "year_founded": 1991,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Mohd Hasan PG College",
        "year_founded": 1994,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports,communication centre"
      },
      {
        "name": "Md. Shahban Memorial P.G. College",
        "year_founded": 2006,
        "state": "Uttar Pradesh",
        "city": "Ballia",
        "facilities": "library,hostel,cafeteria,sports,medical,comp labs,auditorium"
      },
      {
        "name": "Moirabari College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Marigaon",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Moradabad Muslim Degree College - [MMDC]",
        "year_founded": 1996,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,hostel,auditorium,medical,comp labs,laboratory,cafeteria"
      },
      {
        "name": "Moran College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Sibsagar",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Morarji Desai National Institute of Yoga - [MDNIY]",
        "year_founded": 1988,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "gym,cafeteria,comp labs,laboratory,library,sports,hostel,auditorium,medical"
      },
      {
        "name": "Moridhal College",
        "year_founded": 1988,
        "state": "Assam",
        "city": "Dhemaji",
        "facilities": "library,hostel,cafeteria,comp labs,auditorium,medical,sports"
      },
      {
        "name": "Morigaon College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Marigaon",
        "facilities": "library,hostel,cafeteria,sports,auditorium,medical,comp labs,laboratory,communication centre,transport"
      },
      {
        "name": "Morning Star Home Science College Angamaly",
        "year_founded": 1963,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports,classrooms"
      },
      {
        "name": "Moti Lal Nehru College",
        "year_founded": 1964,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,hostel,laboratory,medical,classrooms,communication centre"
      },
      {
        "name": "Motilal Nehru College (Evening)",
        "year_founded": 1965,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,laboratory,classrooms,medical,security"
      },
      {
        "name": "Motibai Rajaram Mahavidyalaya",
        "year_founded": 2010,
        "state": "Uttar Pradesh",
        "city": "Jhansi",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Motilal Nehru Degree College",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Mount Carmel College - [MCC]",
        "year_founded": 1948,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,cafeteria,auditorium,library,laboratory,hostel,gym,classrooms,banks,medical,security"
      },
      {
        "name": "Mount Seena College of Arts and Science Akalur",
        "year_founded": 2010,
        "state": "Kerala",
        "city": "Palakkad",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Mrinalini Dutta Mahavidyapith",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Mrs AVN College",
        "year_founded": 1860,
        "state": "Andhra Pradesh",
        "city": "Visakhapatnam",
        "facilities": "library,laboratory,cafeteria,comp labs,medical,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Mugberia Gangadhar Mahavidyalaya",
        "year_founded": 1964,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs,communication centre"
      },
      {
        "name": "Mula Society Arts, Commerce and Science College - [MSACSC] Sonai",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Ahmed Nagar",
        "facilities": "comp labs,sports,laboratory,library,hostel,auditorium,cafeteria"
      },
      {
        "name": "Mulki Sunder Ram Shetty College - [MSRSC]",
        "year_founded": 1980,
        "state": "Karnataka",
        "city": "Udupi",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,gym,hostel,banks"
      },
      {
        "name": "Multani Mal Modi College",
        "year_founded": 1967,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": "library,laboratory,comp labs,auditorium,cafeteria,medical"
      },
      {
        "name": "Municipal College",
        "year_founded": 1978,
        "state": "Orissa",
        "city": "Rourkela",
        "facilities": "medical,library,auditorium,cafeteria,sports,comp labs,laboratory,transport,hostel,communication centre"
      },
      {
        "name": "Munshi Singh College",
        "year_founded": 1945,
        "state": "Bihar",
        "city": "Motihari",
        "facilities": "comp labs,sports,medical,laboratory,library"
      },
      {
        "name": "Muralidhar Girl's College",
        "year_founded": 1940,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,laboratory,classrooms,hostel"
      },
      {
        "name": "Murgaon Education Societys College of Arts and Commerce - [MES]",
        "year_founded": 1971,
        "state": "Goa",
        "city": "North Goa",
        "facilities": "cafeteria,classrooms,comp labs,sports,auditorium,library"
      },
      {
        "name": "Mysore Correspondence College - [MCC] Malleshwram",
        "year_founded": 1992,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "library,laboratory,comp labs,auditorium,sports,cafeteria,medical,classrooms"
      },
      {
        "name": "Mysore Institute of Commerce and Arts - [MICA]",
        "year_founded": 2012,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "library,hostel,cafeteria,sports,medical,comp labs"
      },
      {
        "name": "N.A.M College Kallikkandy",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "medical,library,cafeteria,auditorium,sports,comp labs"
      },
      {
        "name": "N.D.R.K First Grade College - [NDRKFGC]",
        "year_founded": 1977,
        "state": "Karnataka",
        "city": "Hassan",
        "facilities": "cafeteria,library,laboratory,medical,classrooms,sports,comp labs"
      },
      {
        "name": "NG Acharya and DK Marathe College of Arts Science and Commerce",
        "year_founded": 1978,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "medical,library,cafeteria,auditorium,sports,comp labs,laboratory,transport,communication centre,hostel"
      },
      {
        "name": "NGM College  (Autonomous)",
        "year_founded": 1957,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "sports,medical,library,auditorium,hostel,cafeteria,comp labs"
      },
      {
        "name": "NIIS Institute of Information Science & Management - [NIIS]",
        "year_founded": 2000,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,hostel,gym,sports,classrooms,security"
      },
      {
        "name": "NMKRV College for Women",
        "year_founded": 1973,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,cafeteria,library,auditorium,hostel,laboratory,comp labs,sports,gym"
      },
      {
        "name": "NSS College",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Manjeri",
        "facilities": "comp labs,laboratory,medical,library,cafeteria,sports,auditorium"
      },
      {
        "name": "NSS College",
        "year_founded": 1961,
        "state": "Kerala",
        "city": "Ottapalam",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "NSS College",
        "year_founded": 1949,
        "state": "Kerala",
        "city": "Pathanamthitta",
        "facilities": "cafeteria,auditorium,medical,sports,comp labs,laboratory,library"
      },
      {
        "name": "NSS Hindu College",
        "year_founded": 1947,
        "state": "Kerala",
        "city": "Changanacherry",
        "facilities": "comp labs,cafeteria,laboratory,library,hostel,medical,sports"
      },
      {
        "name": "N.S.S. Training College",
        "year_founded": 1960,
        "state": "Kerala",
        "city": "Ottapalam",
        "facilities": "medical,library,laboratory,comp labs,sports,auditorium,cafeteria"
      },
      {
        "name": "N.S.S. Training College",
        "year_founded": 1954,
        "state": "Kerala",
        "city": "Changanacherry",
        "facilities": "library,laboratory,auditorium,sports,cafeteria,comp labs,medical,gym"
      },
      {
        "name": "N.V. Arts, Sri Kanhyalal Malu Science and Dr. Pandurangrao Patki College of Commerce",
        "year_founded": 1962,
        "state": "Karnataka",
        "city": "Gulbarga",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Nabadwip Vidyasagar College",
        "year_founded": 1942,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "medical,hostel,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Nabagram Hiralal Paul College",
        "year_founded": 1957,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,classrooms,laboratory"
      },
      {
        "name": "Nabajyoti College",
        "year_founded": 1971,
        "state": "Assam",
        "city": "Barpeta",
        "facilities": "library,hostel,cafeteria,sports,medical,auditorium,comp labs"
      },
      {
        "name": "Nabin Chandra College",
        "year_founded": 1969,
        "state": "Assam",
        "city": "Karimganj",
        "facilities": "comp labs,sports,cafeteria,library,auditorium"
      },
      {
        "name": "Nadar Mahajana Sangam S Vellaichamy Nadar College - [NMSSVNC]",
        "year_founded": 1965,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Nadar Saraswathi College of Arts and Science",
        "year_founded": 1996,
        "state": "Tamil Nadu",
        "city": "Theni",
        "facilities": "sports,medical,library,auditorium,hostel"
      },
      {
        "name": "Nagaon GNDG Commerce College",
        "year_founded": 1984,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Nagarjuna Government College",
        "year_founded": 1956,
        "state": "Telangana",
        "city": "Nalgonda",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,hostel,sports"
      },
      {
        "name": "Nagindas Khandwala College of Commerce",
        "year_founded": 1983,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "sports,transport,medical,laboratory,comp labs,classrooms,auditorium,cafeteria,library"
      },
      {
        "name": "Naharkatiya College",
        "year_founded": 1964,
        "state": "Assam",
        "city": "Dibrugarh",
        "facilities": "library,hostel,cafeteria,sports,medical,auditorium,comp labs"
      },
      {
        "name": "Nahata Jogendranath Mandal  Smriti Mahavidyalaya",
        "year_founded": 1985,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "library,laboratory,comp labs,gym"
      },
      {
        "name": "Naipunnya School of Management",
        "year_founded": 2003,
        "state": "Kerala",
        "city": "Cherthala",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Nalini-Arvind and T.V. Patel Arts College",
        "year_founded": 1959,
        "state": "Gujarat",
        "city": "Vallabh Vidyanagar",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Nanak Chand Anglo Sanskrit College",
        "year_founded": 1952,
        "state": "Uttar Pradesh",
        "city": "Meerut",
        "facilities": "sports,library,medical,hostel,gym,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Nandamuri Basava Tarakam and Nallapti Venkateswarlu Chowdary College - [NBT&NVC]",
        "year_founded": null,
        "state": "Andhra Pradesh",
        "city": "Narasaraopet",
        "facilities": "classrooms,library,laboratory,medical,security,sports"
      },
      {
        "name": "Nandini Nagar Mahavidyalaya - [NNMV]",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Narasinghpur College",
        "year_founded": 1978,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Narasinha Dutt College",
        "year_founded": 1924,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library"
      },
      {
        "name": "Nari Shiksha Niketan Post Graduate College",
        "year_founded": 1963,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "National Council for Promotion of Urdu Language- [NCPUL]",
        "year_founded": 1996,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "cafeteria,library,laboratory,comp labs,medical,auditorium,classrooms"
      },
      {
        "name": "National Institute of Social Work and Social Sciences - [NISWASS]",
        "year_founded": 1971,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,laboratory,comp labs,hostel,auditorium,sports"
      },
      {
        "name": "National Institute of Speech and Hearing",
        "year_founded": 1997,
        "state": "Kerala",
        "city": "Thiruvananthapuram",
        "facilities": "auditorium,comp labs,laboratory,medical,cafeteria,sports,library"
      },
      {
        "name": "National Post Graduate College",
        "year_founded": 1974,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "library,comp labs,laboratory,hostel,sports,medical,gym,cafeteria"
      },
      {
        "name": "Sree Narayana College Nattika",
        "year_founded": 1967,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "auditorium,cafeteria,sports,medical,comp labs,laboratory,library,hostel"
      },
      {
        "name": "Natwarlal Maniklal Dalal College of Arts Commerce Law and Management - [NMD]",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Gondiya",
        "facilities": "comp labs,sports,gym,library,auditorium,cafeteria,medical,hostel,classrooms,transport"
      },
      {
        "name": "Nav Sadhana Kala Kendra",
        "year_founded": 1996,
        "state": "Uttar Pradesh",
        "city": "Varanasi",
        "facilities": "library,laboratory,sports,gym,cafeteria,comp labs,medical,hostel,auditorium,classrooms"
      },
      {
        "name": "Navnirman Arts Commerce & Science",
        "year_founded": 2006,
        "state": "Maharashtra",
        "city": "Ratnagiri",
        "facilities": ""
      },
      {
        "name": "Navyug Arts and Commerce College",
        "year_founded": 1962,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "library,laboratory,comp labs,cafeteria,classrooms"
      },
      {
        "name": "Navyug Arts College",
        "year_founded": 1996,
        "state": "Gujarat",
        "city": "Surat",
        "facilities": "medical,library,comp labs,auditorium,cafeteria,sports"
      },
      {
        "name": "Navyug Kanya Mahavidyalaya",
        "year_founded": 1963,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "cafeteria,library,laboratory,comp labs,medical,auditorium"
      },
      {
        "name": "Nawab Jassa Singh Ahluwalia Government College - [NJSA]",
        "year_founded": 1856,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": "laboratory,library,comp labs,cafeteria,sports,auditorium"
      },
      {
        "name": "Neelagiri Degree College",
        "year_founded": 2002,
        "state": "Telangana",
        "city": "Nalgonda",
        "facilities": "cafeteria,library,laboratory,medical,sports"
      },
      {
        "name": "Nehtaur Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Bijnor",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Netaji Nagar Day College",
        "year_founded": 1967,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,classrooms,hostel"
      },
      {
        "name": "New Arts, Commerce and Science College",
        "year_founded": 1978,
        "state": "Maharashtra",
        "city": "Ahmed Nagar",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "New Arts Commerce and Science College",
        "year_founded": 1996,
        "state": "Maharashtra",
        "city": "Wardha",
        "facilities": "library,laboratory,comp labs"
      },
      {
        "name": "New Horizon College Marathalli - [NHCM]",
        "year_founded": 1998,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,transport,classrooms"
      },
      {
        "name": "New Look Girls College - [NLGC]",
        "year_founded": 1979,
        "state": "Rajasthan",
        "city": "Banswara",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Newman College",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Thodupuzha",
        "facilities": "medical,auditorium,cafeteria,sports,library,comp labs,laboratory,hostel"
      },
      {
        "name": "Night College of Arts & Commerce",
        "year_founded": 1971,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": "library,laboratory,comp labs,gym"
      },
      {
        "name": "Nilkanthrao Shinde Science &  Arts College - [NSSAC]",
        "year_founded": 1993,
        "state": "Maharashtra",
        "city": "Chandrapur",
        "facilities": "library,laboratory,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Nimapara College",
        "year_founded": null,
        "state": "Orissa",
        "city": "Puri",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Nirankari Baba Gurbachan Singh Memorial College",
        "year_founded": null,
        "state": "Haryana",
        "city": "Bhiwani",
        "facilities": "library,laboratory,auditorium,medical,sports,gym,comp labs,hostel,cafeteria"
      },
      {
        "name": "Nirmala College",
        "year_founded": 1969,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "library,comp labs,classrooms,cafeteria,hostel,wi-fi campus"
      },
      {
        "name": "Nirmala College",
        "year_founded": 1953,
        "state": "Kerala",
        "city": "Muvattupuzha",
        "facilities": "medical,library,laboratory,comp labs,auditorium,cafeteria,sports,hostel"
      },
      {
        "name": "Nirmala College for Women",
        "year_founded": 1948,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "hostel,laboratory,comp labs,library,medical,classrooms,sports"
      },
      {
        "name": "Nirmalagiri College Nirmalagiri",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "medical,cafeteria,sports,auditorium,hostel,library,laboratory,comp labs"
      },
      {
        "name": "Nitte Institute of Speech and Hearing - [NISH]",
        "year_founded": 2007,
        "state": "Karnataka",
        "city": "Mangalore",
        "facilities": "medical,cafeteria,library,auditorium,hostel,comp labs,classrooms"
      },
      {
        "name": "Nivedita Singh Girls Degree College",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Fatehpur",
        "facilities": "library,comp labs"
      },
      {
        "name": "Nizam College",
        "year_founded": 1887,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,auditorium,hostel,library,classrooms"
      },
      {
        "name": "Faculty of Engineering, Nobel Group Of Institution ",
        "year_founded": 2007,
        "state": "Gujarat",
        "city": "Junagadh",
        "facilities": "library,laboratory,gym,comp labs,cafeteria,sports,auditorium,hostel,medical"
      },
      {
        "name": "O.F.K Government College",
        "year_founded": 1980,
        "state": "Madhya Pradesh",
        "city": "Jabalpur",
        "facilities": "library,medical,auditorium,cafeteria,sports,comp labs,classrooms,security,laboratory,hostel"
      },
      {
        "name": "Oriental Theological Seminary - [OTS]",
        "year_founded": 1991,
        "state": "Nagaland",
        "city": "Dimapur",
        "facilities": ""
      },
      {
        "name": "Ornate Institute of Technology",
        "year_founded": 2010,
        "state": "Uttar Pradesh",
        "city": "Saharanpur",
        "facilities": "classrooms,medical,sports,library,hostel,cafeteria,comp labs,auditorium"
      },
      {
        "name": "Osmania College",
        "year_founded": 1947,
        "state": "Andhra Pradesh",
        "city": "Kurnool",
        "facilities": "library,cafeteria,auditorium,sports,comp labs,gym,laboratory,classrooms"
      },
      {
        "name": "PB Siddhartha College Arts and Science",
        "year_founded": 1975,
        "state": "Andhra Pradesh",
        "city": "Vijayawada",
        "facilities": "comp labs,cafeteria,laboratory,library,sports,gym,medical,auditorium,hostel,classrooms,security"
      },
      {
        "name": "PCM SD College for Women",
        "year_founded": 1973,
        "state": "Punjab",
        "city": "Jalandhar",
        "facilities": "comp labs,auditorium,library,cafeteria"
      },
      {
        "name": "PD Karkhanis College of Arts and Commerce",
        "year_founded": 1936,
        "state": "Maharashtra",
        "city": "Thane",
        "facilities": "library,comp labs"
      },
      {
        "name": "PD Mahila Degree College",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Farrukhabad",
        "facilities": "library,laboratory,comp labs,cafeteria,classrooms,sports,auditorium,medical,hostel"
      },
      {
        "name": "PD Women's College - [PDWC]",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "Jalpaiguri",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "PES's Modern College of Arts, Science and Commerce Ganeshkhind",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "sports,laboratory,library"
      },
      {
        "name": "PGDAV College (Evening)",
        "year_founded": 1958,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "library,comp labs,classrooms,auditorium,medical,sports,cafeteria,laboratory"
      },
      {
        "name": "PK Roy Memorial College",
        "year_founded": 1961,
        "state": "Jharkhand",
        "city": "Dhanbad",
        "facilities": "library,comp labs,cafeteria,laboratory,classrooms,auditorium,wi-fi campus"
      },
      {
        "name": "PNG Government PG College",
        "year_founded": 1976,
        "state": "Uttarakhand",
        "city": "Nainital",
        "facilities": "library,laboratory,comp labs,cafeteria,hostel,sports,medical,auditorium,swimming pool"
      },
      {
        "name": "PSG College of Arts and Science",
        "year_founded": 1947,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "medical,cafeteria,library,auditorium,hostel,comp labs,sports,gym,laboratory,classrooms"
      },
      {
        "name": "PSGR Krishnammal College for Women",
        "year_founded": 1963,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "medical,cafeteria,library,auditorium,hostel,laboratory,comp labs,transport,sports"
      },
      {
        "name": "PVKN Govt Degree College - [PVKNGDC]",
        "year_founded": 1961,
        "state": "Andhra Pradesh",
        "city": "Chittoor",
        "facilities": "auditorium,medical,e-classroom,cafeteria,laboratory,comp labs,library,sports"
      },
      {
        "name": "Pachaiyappa's College",
        "year_founded": 2002,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "Pachhunga University College",
        "year_founded": 1958,
        "state": "Mizoram",
        "city": "Aizawl",
        "facilities": "medical,library,sports,auditorium,cafeteria,hostel,comp labs,laboratory"
      },
      {
        "name": "Padmabhushan Vasantdada Patil College- [PVPC]",
        "year_founded": 1989,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "comp labs,cafeteria,library,laboratory,medical,sports,auditorium,hostel"
      },
      {
        "name": "Padmaja Naidu College of Music",
        "year_founded": 1965,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Padmashri Vikhe Patil Arts, Science & Commerce College Pravarnagar",
        "year_founded": 1971,
        "state": "Maharashtra",
        "city": "Ahmed Nagar",
        "facilities": "comp labs,library,hostel,auditorium,cafeteria,sports"
      },
      {
        "name": "Pakuahat Degree College",
        "year_founded": 1997,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Panampilly Memorial Govt. College - [PMGC] Chalakudy",
        "year_founded": 1975,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "cafeteria,library,laboratory,medical,comp labs,sports,classrooms,auditorium,wi-fi campus"
      },
      {
        "name": "Panch Pargana Kisan College- [PPK]",
        "year_founded": 1975,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "comp labs,cafeteria,library,laboratory,medical,auditorium,classrooms"
      },
      {
        "name": "Panchakot Mahavidyalaya",
        "year_founded": 2000,
        "state": "West Bengal",
        "city": "Neturia",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel,laboratory,sports"
      },
      {
        "name": "Panchmura Mahavidya",
        "year_founded": 1965,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "classrooms,e-classroom,laboratory,comp labs,library,auditorium,medical,sports,cafeteria"
      },
      {
        "name": "Pandaveswar College",
        "year_founded": 2005,
        "state": "West Bengal",
        "city": "Bardhaman",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Pandit Mohan Lal SD College for Women - [PTMLSDC]",
        "year_founded": 2005,
        "state": "Punjab",
        "city": "Gurdaspur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Pandit Prithi Nath College - [PPN]",
        "year_founded": 1959,
        "state": "Uttar Pradesh",
        "city": "Kanpur",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Pandit Sant Ram Government College",
        "year_founded": 2007,
        "state": "Himachal Pradesh",
        "city": "Kangra",
        "facilities": "library,comp labs,laboratory,gym,cafeteria,medical,hostel,auditorium,sports"
      },
      {
        "name": "Pandu College",
        "year_founded": 1962,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "library,hostel,auditorium,cafeteria,sports,medical,comp labs,laboratory"
      },
      {
        "name": "Panigaon Omprakash Dinodia College",
        "year_founded": 1984,
        "state": "Assam",
        "city": "Lakhimpur",
        "facilities": "hostel,canteen,medical,auditorium,library"
      },
      {
        "name": "Panihati Mahavidyalaya",
        "year_founded": 1976,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Panskura Banamali College",
        "year_founded": 1960,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "comp labs,library,medical,auditorium,classrooms,security,cafeteria,laboratory"
      },
      {
        "name": "Parameswar Mahavidyalaya",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Namkhana",
        "facilities": "comp labs,sports,library,hostel,canteen,medical,auditorium,classrooms"
      },
      {
        "name": "Paramhans Degree College - [PDC]",
        "year_founded": 1993,
        "state": "Uttar Pradesh",
        "city": "Bahraich",
        "facilities": ""
      },
      {
        "name": "Parishkar College of Global Excellence",
        "year_founded": 2006,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "comp labs,library,canteen,medical,auditorium,hostel"
      },
      {
        "name": "Paschim Guwahati Mahavidyalaya",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": ""
      },
      {
        "name": "Pasumpon Muthuramalinga Thevar College - [PMTC]",
        "year_founded": 1968,
        "state": "Tamil Nadu",
        "city": "Madurai",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Patel Institute of Science and Management - [PISM]",
        "year_founded": 2006,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,transport,hostel"
      },
      {
        "name": "Patiala College of Education",
        "year_founded": 2006,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": ""
      },
      {
        "name": "Patkai Christian College",
        "year_founded": 2006,
        "state": "Nagaland",
        "city": "Dimapur",
        "facilities": ""
      },
      {
        "name": "Patna College",
        "year_founded": 1863,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "comp labs,library,laboratory,cafeteria,hostel,auditorium,sports,classrooms"
      },
      {
        "name": "Patna Women's College - [PWC]",
        "year_founded": 1940,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "medical,sports,cafeteria,library,laboratory,comp labs,hostel,classrooms"
      },
      {
        "name": "Pattammal Alagesan College of Arts & Science",
        "year_founded": 2000,
        "state": "Tamil Nadu",
        "city": "Kanchipuram",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,sports,gym,hostel,auditorium"
      },
      {
        "name": "Pavanatma College Murickassery",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Idukki",
        "facilities": "auditorium,canteen,comp labs,library"
      },
      {
        "name": "Payyannur College Payyanur",
        "year_founded": 1965,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": "laboratory,comp labs,cafeteria,library,auditorium,classrooms"
      },
      {
        "name": "Pazhassi Raja College Pulpally",
        "year_founded": 1982,
        "state": "Kerala",
        "city": "Wayanad",
        "facilities": "medical,cafeteria,library,auditorium,hostel,classrooms,communication centre,laboratory,wi-fi campus"
      },
      {
        "name": "Pazhassi Raja NSS College - [PRNSS] Mattanur",
        "year_founded": 1964,
        "state": "Kerala",
        "city": "Kannur",
        "facilities": ""
      },
      {
        "name": "Pedanandipadu College of Arts and Sciences",
        "year_founded": 1968,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "comp labs,cafeteria,laboratory,library,medical,auditorium,classrooms,hostel,security"
      },
      {
        "name": "Pemraj Sarda College",
        "year_founded": 1962,
        "state": "Maharashtra",
        "city": "Ahmed Nagar",
        "facilities": "comp labs,library,canteen,medical,auditorium,sports"
      },
      {
        "name": "Perunthalaivar Kamarajar Government Arts College",
        "year_founded": 1998,
        "state": "Puducherry",
        "city": "Pondicherry",
        "facilities": "comp labs,library,canteen,medical,auditorium,classrooms,laboratory,cafeteria"
      },
      {
        "name": "Pipili College",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Puri",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Pocker Sahib Memorial Orphanage College - [PSMO]",
        "year_founded": 1968,
        "state": "Kerala",
        "city": "Tirurangadi",
        "facilities": "hostel,auditorium,classrooms,comp labs,laboratory,medical,cafeteria,sports"
      },
      {
        "name": "Poddar Management Training Institute",
        "year_founded": 1999,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Polba Mahavidyalaya",
        "year_founded": 2005,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,hostel,classrooms"
      },
      {
        "name": "Pookoya Thangal Memorial Government College",
        "year_founded": 1975,
        "state": "Kerala",
        "city": "Perinthalmanna",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Poona College of Arts, Science and Commerce - [PCASC]",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,library,laboratory,hostel,comp labs,cafeteria,auditorium,sports,gym"
      },
      {
        "name": "Post Graduate Government College",
        "year_founded": 1953,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "comp labs,cafeteria,sports,library,laboratory,gym,medical,hostel"
      },
      {
        "name": "Prabharani Institute of Education",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "library,comp labs,laboratory,cafeteria,sports,classrooms"
      },
      {
        "name": "Prabhat Kumar College",
        "year_founded": 1926,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms,security,hostel,medical"
      },
      {
        "name": "Prabhu Narayan Singh Maha Vidyalaya",
        "year_founded": 1997,
        "state": "Uttar Pradesh",
        "city": "Ghazipur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Prafulla Chandra College",
        "year_founded": 1954,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Pragathi First Grade College",
        "year_founded": 2001,
        "state": "Karnataka",
        "city": "Vijaypur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Pragati College",
        "year_founded": null,
        "state": "Chhattisgarh",
        "city": "Raipur",
        "facilities": "classrooms,medical,sports,library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "Pragjyotish College",
        "year_founded": 1954,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,transport,sports"
      },
      {
        "name": "Prajyoti Niketan College Pudukad",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "laboratory,comp labs,medical,gym,wi-fi campus,e-classroom,cafeteria,library,hostel,auditorium"
      },
      {
        "name": "Pramod Mahavidhyalaya",
        "year_founded": 1991,
        "state": "Uttar Pradesh",
        "city": "Mahamaya Nagar",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Pratap College",
        "year_founded": null,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Prema Katiyar Shikshan Sansthan College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Premier College of Arts Commerce Science and Management Studies",
        "year_founded": 2002,
        "state": "Maharashtra",
        "city": "Raigarh",
        "facilities": "library,laboratory,comp labs,auditorium,medical,cafeteria"
      },
      {
        "name": "Presidency College",
        "year_founded": 2000,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Presidency College",
        "year_founded": 1840,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "medical,cafeteria,library,auditorium,comp labs,sports,classrooms"
      },
      {
        "name": "Preston International College",
        "year_founded": 2009,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Late Annasaheb R.D. Deore Arts and Science College",
        "year_founded": 1998,
        "state": "Maharashtra",
        "city": "Dhule",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Prithvi Shiv Kisan Majdoor Balika PG College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Ballia",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Priyadarshini College of Engineering and Technology - [PCET]",
        "year_founded": 2005,
        "state": "Andhra Pradesh",
        "city": "Nellore",
        "facilities": "transport,library,canteen,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Priyadarshini Mahila Mahavidyalaya",
        "year_founded": 1985,
        "state": "Orissa",
        "city": "Rourkela",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Prof Gursewak Singh Punjab Government College of Physical Education - [PGSPGCPE]",
        "year_founded": 1958,
        "state": "Punjab",
        "city": "Patiala",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Providence  Women's  College",
        "year_founded": 1952,
        "state": "Kerala",
        "city": "Calicut",
        "facilities": "library,laboratory,sports,medical,hostel"
      },
      {
        "name": "Pt. Naki Ram Sharma Goverment College",
        "year_founded": 1924,
        "state": "Haryana",
        "city": "Rohtak",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Pt. Raj Narayan Mishra Degree College",
        "year_founded": 2012,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Pt. Ramdutt Tripathi Mahavidyalaya",
        "year_founded": 2001,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Pt Rameshwar Bajpai Smriti Mahavidylaya",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "medical,hostel,gym,sports,library,cafeteria,auditorium,comp labs,laboratory"
      },
      {
        "name": "Pt. Triyugi Narayan Mahavidyalaya",
        "year_founded": 2002,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Pt. Vasudev Tiwari College of Education",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Jhansi",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "PTVA's Sathaye College",
        "year_founded": 1959,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,gym,classrooms"
      },
      {
        "name": "Purash Kanpur Haridas Nandi Mahavidyalaya",
        "year_founded": 1966,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Purnea College",
        "year_founded": 1948,
        "state": "Bihar",
        "city": "Purnea",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,hostel,gym,laboratory"
      },
      {
        "name": "Quaide-E-Millath Government College for Women (Autonomous)",
        "year_founded": null,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "library,cafeteria,auditorium,sports,medical,comp labs,laboratory,hostel"
      },
      {
        "name": "Queen Mary's College",
        "year_founded": 1915,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,sports,medical,cafeteria,library,auditorium,laboratory"
      },
      {
        "name": "R. Sankar Memorial SNDP Yogam Arts & Science College",
        "year_founded": 1995,
        "state": "Kerala",
        "city": "Koyilandi",
        "facilities": "library,auditorium,wi-fi campus,cafeteria,sports,comp labs,laboratory"
      },
      {
        "name": "R.B. Attal Arts Science and Commerce College",
        "year_founded": 1971,
        "state": "Maharashtra",
        "city": "Beed",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "RBBM College",
        "year_founded": 1969,
        "state": "Bihar",
        "city": "Muzaffarpur",
        "facilities": "comp labs,sports,library,auditorium,classrooms,security,laboratory,cafeteria,medical,hostel"
      },
      {
        "name": "RBS Mahavidyalaya",
        "year_founded": 2008,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "library,comp labs"
      },
      {
        "name": "RCA Girl's College",
        "year_founded": 1971,
        "state": "Uttar Pradesh",
        "city": "Mathura",
        "facilities": "library,laboratory,cafeteria,hostel,medical,classrooms,sports"
      },
      {
        "name": "RH Patel Arts and Commerce College",
        "year_founded": 1991,
        "state": "Gujarat",
        "city": "Ahmedabad",
        "facilities": "library,auditorium,comp labs,laboratory"
      },
      {
        "name": "RIG Institute of Hospitality and Management",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Greater Noida",
        "facilities": "comp labs,sports,cafeteria,library,auditorium"
      },
      {
        "name": "RJ Institute of Higher Education",
        "year_founded": 1999,
        "state": "Uttar Pradesh",
        "city": "Bulandshahr",
        "facilities": "comp labs,library,medical,sports,cafeteria"
      },
      {
        "name": "RKSD PG College",
        "year_founded": 1954,
        "state": "Haryana",
        "city": "Kaithal",
        "facilities": "comp labs,sports,cafeteria,library,auditorium"
      },
      {
        "name": "RP Degree College",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Sonbhadra",
        "facilities": "library,comp labs,cafeteria,hostel"
      },
      {
        "name": "RSD College",
        "year_founded": 1921,
        "state": "Punjab",
        "city": "Firozpur",
        "facilities": "sports,laboratory,library,auditorium,hostel"
      },
      {
        "name": "RTES Society's  Arts, Science and Commerce College",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Ranibennur",
        "facilities": "library,comp labs,laboratory"
      },
      {
        "name": "RVS College of Arts and Science - [RVSCAS]",
        "year_founded": 1986,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms"
      },
      {
        "name": "Raath Mahavidyalaya",
        "year_founded": 2005,
        "state": "Uttarakhand",
        "city": "Garhwal",
        "facilities": "library,comp labs"
      },
      {
        "name": "Rabindra Mahavidyalaya",
        "year_founded": 1971,
        "state": "West Bengal",
        "city": "Hooghly",
        "facilities": "library,laboratory,comp labs,cafeteria,hostel,sports,classrooms"
      },
      {
        "name": "Radha Govinda Baruah College",
        "year_founded": 1978,
        "state": "Assam",
        "city": "Guwahati",
        "facilities": "library,laboratory,gym,cafeteria,comp labs,medical,hostel,auditorium,sports"
      },
      {
        "name": "Radha Mahavidyalaya",
        "year_founded": 1992,
        "state": "Maharashtra",
        "city": "Nagpur",
        "facilities": "library,laboratory,comp labs,medical"
      },
      {
        "name": "Radhey Hari Government Post Graduate College",
        "year_founded": 1997,
        "state": "Uttarakhand",
        "city": "Udham Singh Nagar",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,sports,auditorium,hostel"
      },
      {
        "name": "Raghauram Diwakar Dutt Gyanodaya Mahavidyalaya- [RRDDC]",
        "year_founded": 2007,
        "state": "Uttar Pradesh",
        "city": "Gonda",
        "facilities": "library,auditorium,comp labs,cafeteria,sports,medical,classrooms"
      },
      {
        "name": "Raha College",
        "year_founded": 1994,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "library,laboratory,medical,comp labs,auditorium,sports,hostel,gym,cafeteria"
      },
      {
        "name": "Raiganj Surendranath Mahavidyalaya",
        "year_founded": 1986,
        "state": "West Bengal",
        "city": "Uttar Dinajpur",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,laboratory,sports,hostel,classrooms"
      },
      {
        "name": "Raj Bahadur Singh Degree College - [RBS]",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Etawah",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,laboratory,sports,gym,hostel"
      },
      {
        "name": "Raj Kumar Goel Girls Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Ghaziabad",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,hostel,gym,laboratory,sports"
      },
      {
        "name": "Raja Bahadur Venkat Rama Reddy Women's College - [RBVRR]",
        "year_founded": 1954,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "library,comp labs,laboratory,auditorium,cafeteria,transport,sports"
      },
      {
        "name": "Raja Kanh PG College - [RKPG]",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "library,laboratory,auditorium,comp labs,cafeteria,sports,medical,classrooms"
      },
      {
        "name": "Raja Narendra Lal Khan Women's College - [RNLKWC]",
        "year_founded": 1957,
        "state": "West Bengal",
        "city": "Medinipur",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,hostel,sports,classrooms"
      },
      {
        "name": "Rajat Girls' Degree College",
        "year_founded": 1991,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel,comp labs,laboratory,transport"
      },
      {
        "name": "Rajdhani College",
        "year_founded": 1964,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,auditorium,gym,hostel,classrooms"
      },
      {
        "name": "Rajendra College",
        "year_founded": 1994,
        "state": "Orissa",
        "city": "Balangir",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,sports,gym,hostel,laboratory"
      },
      {
        "name": "Rajendra College",
        "year_founded": 1938,
        "state": "Bihar",
        "city": "Chapra",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,laboratory,gym,sports"
      },
      {
        "name": "Rajendra Prasad Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Bareilly",
        "facilities": "library,laboratory,auditorium,comp labs,cafeteria,hostel,sports,medical,gym"
      },
      {
        "name": "Rajesh Kumar Maha Vidyalaya",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Rajeev Gandhi College",
        "year_founded": 1994,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "sports,medical,library,auditorium,hostel,comp labs,cafeteria,laboratory,classrooms"
      },
      {
        "name": "Rajmata Lalli Kumari Mahavidyalaya, Payagpur",
        "year_founded": 2001,
        "state": "Uttar Pradesh",
        "city": "Bahraich",
        "facilities": "comp labs,library,medical,auditorium,classrooms,cafeteria"
      },
      {
        "name": "Ram Baran Degree College - [RBDC]",
        "year_founded": 2001,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "comp labs,library,medical,auditorium,classrooms,cafeteria"
      },
      {
        "name": "Ram Chandra Uniyal Government Post Graduate College",
        "year_founded": 1969,
        "state": "Uttarakhand",
        "city": "Uttarkashi",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Ram Krishna College - [RKC]",
        "year_founded": 1940,
        "state": "Bihar",
        "city": "Madhubani",
        "facilities": "comp labs,library,canteen,medical,auditorium,classrooms,laboratory,hostel,wi-fi campus"
      },
      {
        "name": "Ram Krishna Dwarika College - [RKD]",
        "year_founded": 1964,
        "state": "Bihar",
        "city": "Patna",
        "facilities": "library,comp labs,laboratory,auditorium,cafeteria,sports,wi-fi campus,classrooms"
      },
      {
        "name": "Ram Lakhan Singh Yadav College - [RLSY]",
        "year_founded": 1975,
        "state": "Bihar",
        "city": "Aurangabad",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Ram Lakhan Singh Yadav College - [RLSY]",
        "year_founded": 1975,
        "state": "Bihar",
        "city": "Patna",
        "facilities": ""
      },
      {
        "name": "Aryabhatta College",
        "year_founded": 2015,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,security,classrooms"
      },
      {
        "name": "Ram Lubhai Sahni govt Mahila Degree College / RLSahani Govt Mahila PG College",
        "year_founded": 1996,
        "state": "Uttar Pradesh",
        "city": "Pilibhit",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Ram Vilas Ganga Ram College - [RVGRC]",
        "year_founded": 1961,
        "state": "Bihar",
        "city": "Siwan",
        "facilities": "comp labs,library,auditorium,medical,cafeteria"
      },
      {
        "name": "Rama Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,transport"
      },
      {
        "name": "Rama Devi Women's University",
        "year_founded": 2015,
        "state": "Orissa",
        "city": "Bhubaneswar",
        "facilities": "library,laboratory,auditorium,cafeteria,hostel,sports,comp labs,medical,classrooms,security"
      },
      {
        "name": "Ramakrishna Mission Vidyamandira",
        "year_founded": 1960,
        "state": "West Bengal",
        "city": "Howrah",
        "facilities": "sports,medical,library,hostel,gym,cafeteria,comp labs,auditorium,laboratory,classrooms"
      },
      {
        "name": "Ramakrishna Mission Vivekananda College",
        "year_founded": 1946,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,hostel,classrooms,canteen,auditorium,sports"
      },
      {
        "name": "Ramdev Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Ramgarh College",
        "year_founded": 1963,
        "state": "Jharkhand",
        "city": "Ramgarh",
        "facilities": "comp labs,canteen,medical,auditorium,library,cafeteria,classrooms,sports,laboratory"
      },
      {
        "name": "Ramgarhia Girls College",
        "year_founded": 1970,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "Ramharakh Singh Memorial Degree College - [RHSMDC]",
        "year_founded": 2006,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "comp labs,library,medical,auditorium,classrooms,cafeteria"
      },
      {
        "name": "Ramjas College",
        "year_founded": 1917,
        "state": "Delhi NCR",
        "city": "New Delhi",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel,classrooms,security"
      },
      {
        "name": "Ramkhelawan Singh PG College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Mirzapur",
        "facilities": "comp labs,library,canteen,medical,auditorium"
      },
      {
        "name": "Ramkrishna Paramhans Mahavidhalaya",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Unnao",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ramkrishna Paramhansa Mahavidyalaya",
        "year_founded": 1954,
        "state": "Maharashtra",
        "city": "Osmanabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Rammohan College",
        "year_founded": 1961,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,gym,hostel"
      },
      {
        "name": "Ramnarain Ruia College",
        "year_founded": 1937,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,classrooms"
      },
      {
        "name": "Ramniranjan Jhunjhunwala College - [R.J.C]",
        "year_founded": 1963,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "library,auditorium,gym,cafeteria"
      },
      {
        "name": "Rampurhat College",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "Birbhum",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ramroop Memorial Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Faizabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ramsundar Pandey Mahavidhyalaya",
        "year_founded": 2003,
        "state": "Uttar Pradesh",
        "city": "Mau",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ramthakur College",
        "year_founded": 1967,
        "state": "Tripura",
        "city": "West Tripura",
        "facilities": ""
      },
      {
        "name": "Ramwati Devi Narayan Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Kanpur Dehat",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ramwati Raj Bahadur Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Auraiya",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ran Vijay Pratap Singh Government College- [RVPSGC]",
        "year_founded": 1972,
        "state": "Madhya Pradesh",
        "city": "Umaria",
        "facilities": "hostel,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Rana Pratap PG College",
        "year_founded": 1971,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ranaghat College",
        "year_founded": 1950,
        "state": "West Bengal",
        "city": "Nadia",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Ranchi Women's College",
        "year_founded": 1949,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Rani Avantibai Lodhi Institute of Higher Education College",
        "year_founded": 2011,
        "state": "Uttar Pradesh",
        "city": "Firozabad",
        "facilities": "library,auditorium"
      },
      {
        "name": "R.B.D. Mahila Mahavidyalaya",
        "year_founded": 1971,
        "state": "Uttar Pradesh",
        "city": "Bijnor",
        "facilities": "library,sports,cafeteria,auditorium,comp labs,medical,hostel,gym,laboratory"
      },
      {
        "name": "Rani Birla Girl's College",
        "year_founded": 1961,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,sports,cafeteria,auditorium,library,laboratory,gym,hostel,comp labs"
      },
      {
        "name": "Rani Chandraprabha College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Fatehpur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Rani Dhanya Kumari College",
        "year_founded": 1962,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "Rani Ganesh Kunwari Degree College",
        "year_founded": 2001,
        "state": "Uttar Pradesh",
        "city": "Sultanpur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Rani Parvati Devi College of Arts and Commerce - [RPD]",
        "year_founded": 1945,
        "state": "Karnataka",
        "city": "Belagavi",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Raniganj Girls College",
        "year_founded": 1980,
        "state": "West Bengal",
        "city": "Bundwan",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,hostel"
      },
      {
        "name": "Ranver Nilam Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Etawah",
        "facilities": "comp labs,sports,gym,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Rashtrapita Mahatma Gandhi Arts Commerce and Science College",
        "year_founded": 1994,
        "state": "Maharashtra",
        "city": "Chandrapur",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Rathinam College of Arts and Science",
        "year_founded": 2001,
        "state": "Tamil Nadu",
        "city": "Coimbatore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel,security,classrooms"
      },
      {
        "name": "Rayagada Autonomous college",
        "year_founded": 1966,
        "state": "Orissa",
        "city": "Rayagada",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,classrooms,security,medical"
      },
      {
        "name": "Rayat Shikshan Sanstha's DP Bhosale College",
        "year_founded": 1968,
        "state": "Maharashtra",
        "city": "Satara",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Regional Institute of Education - [RIE]",
        "year_founded": 1963,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports,hostel,classrooms"
      },
      {
        "name": "Regional Institute of English - [RIE]",
        "year_founded": 1963,
        "state": "Chandigarh",
        "city": "Chandigarh",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Regional Management College",
        "year_founded": 1997,
        "state": "Kerala",
        "city": "Malappuram",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Renuka Institute of Management - [RIM]",
        "year_founded": null,
        "state": "Madhya Pradesh",
        "city": "Barwani",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Rishi Bankim Chandra Evening College",
        "year_founded": 1947,
        "state": "West Bengal",
        "city": "North 24 Parganas",
        "facilities": "sports,library,auditorium,comp labs"
      },
      {
        "name": "Rishiwal Mahavidyalaya",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Moradabad",
        "facilities": "library,laboratory"
      },
      {
        "name": "Rizvi College of Arts Science and Commerce",
        "year_founded": 1986,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium,medical,classrooms"
      },
      {
        "name": "Roda Mistry College of Social Work and Research Centre - [ICSWAP]",
        "year_founded": 1964,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,sports,cafeteria,library,hostel"
      },
      {
        "name": "Roever College of Engineering and Technology",
        "year_founded": 2009,
        "state": "Tamil Nadu",
        "city": "Perambalur",
        "facilities": "hostel,transport,library,cafeteria,auditorium,laboratory,comp labs,sports"
      },
      {
        "name": "Rosary College of Commerce and Arts",
        "year_founded": 1999,
        "state": "Goa",
        "city": "Salcete",
        "facilities": "comp labs,sports,cafeteria,library,gym,hostel,laboratory,auditorium"
      },
      {
        "name": "Royal PG College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Lucknow",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "Royal Prudence Degree College",
        "year_founded": 2004,
        "state": "Uttar Pradesh",
        "city": "Lakhimpur",
        "facilities": "library,comp labs"
      },
      {
        "name": "Rupahi College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Nagaon",
        "facilities": "library,comp labs,medical"
      },
      {
        "name": "Rural Development Society's BSW College - [RDS]",
        "year_founded": 2002,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "library,laboratory,comp labs,medical"
      },
      {
        "name": "Rural Institute of Higher Studies",
        "year_founded": 1980,
        "state": "Orissa",
        "city": "Baleswar",
        "facilities": "library,laboratory,hostel,comp labs,classrooms,security,medical,cafeteria,sports,auditorium"
      },
      {
        "name": "SA Jain College",
        "year_founded": 1938,
        "state": "Haryana",
        "city": "Ambala",
        "facilities": "cafeteria,library,laboratory,comp labs,medical,auditorium"
      },
      {
        "name": "SARBTM Govt. College",
        "year_founded": 1975,
        "state": "Kerala",
        "city": "Koyilandi",
        "facilities": "medical,library,cafeteria,sports,auditorium,comp labs,hostel"
      },
      {
        "name": "S.B.E.S. College of Arts and Commerce",
        "year_founded": 1963,
        "state": "Maharashtra",
        "city": "Aurangabad",
        "facilities": "library,sports,hostel,cafeteria,comp labs,auditorium,laboratory,medical,gym"
      },
      {
        "name": "SBRR Mahajana First Grade College",
        "year_founded": 1982,
        "state": "Karnataka",
        "city": "Mysore",
        "facilities": "medical,cafeteria,library,auditorium,hostel,gym,sports,laboratory,comp labs"
      },
      {
        "name": "SCIM Government Degree  & PG College",
        "year_founded": 1968,
        "state": "Andhra Pradesh",
        "city": "Tanuku",
        "facilities": "medical,library,laboratory,comp labs,sports,classrooms"
      },
      {
        "name": "Sunil Dhar Memorial B.P.Ed. College",
        "year_founded": 2007,
        "state": "West Bengal",
        "city": "Murshidabad",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms"
      },
      {
        "name": "SDN Bhatt Vaishnav College for Women",
        "year_founded": 1967,
        "state": "Tamil Nadu",
        "city": "Chennai",
        "facilities": "hostel,library,sports,laboratory,comp labs"
      },
      {
        "name": "S.E.A. College of Arts, Commerce and Science - [SEACSAM]",
        "year_founded": 2000,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": "comp labs,sports,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "SGGS Khalsa College",
        "year_founded": 1946,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical"
      },
      {
        "name": "SGHR Sahib College for Women",
        "year_founded": 2001,
        "state": "Punjab",
        "city": "Hoshiarpur",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "SIES College of Arts Science and Commerce",
        "year_founded": 1960,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": "comp labs,medical,sports,gym,hostel,library,laboratory,auditorium"
      },
      {
        "name": "SJK College",
        "year_founded": 1971,
        "state": "Haryana",
        "city": "Rohtak",
        "facilities": "cafeteria,library,laboratory,medical,comp labs,sports"
      },
      {
        "name": "SJR College of Science, Arts and Commerce - [SJRC]",
        "year_founded": 1945,
        "state": "Karnataka",
        "city": "Bangalore",
        "facilities": ""
      },
      {
        "name": "Srishaila Jagadguru Vageesha Panditaradhya College Harihar ",
        "year_founded": 1970,
        "state": "Karnataka",
        "city": "Davanagere",
        "facilities": "cafeteria,library,laboratory,comp labs,medical,auditorium,gym,banks"
      },
      {
        "name": "Sree Konaseema Bhanoji Ramars College",
        "year_founded": 1951,
        "state": "Andhra Pradesh",
        "city": "East Godavari",
        "facilities": "laboratory,classrooms,cafeteria,comp labs,sports"
      },
      {
        "name": "SKSD Mahila Kalasala",
        "year_founded": 1982,
        "state": "Andhra Pradesh",
        "city": "Tanuku",
        "facilities": "cafeteria,library,laboratory,comp labs,auditorium,sports,transport,medical,classrooms,hostel"
      },
      {
        "name": "SL Bawa DAV College",
        "year_founded": 1971,
        "state": "Punjab",
        "city": "Batala",
        "facilities": ""
      },
      {
        "name": "SMJN College",
        "year_founded": 1960,
        "state": "Uttarakhand",
        "city": "Haridwar",
        "facilities": "library,laboratory,comp labs,cafeteria"
      },
      {
        "name": "SN College",
        "year_founded": null,
        "state": "Orissa",
        "city": "Kendrapara",
        "facilities": "library,laboratory,hostel,medical,sports,auditorium,comp labs,cafeteria,gym"
      },
      {
        "name": "S.N.S. College",
        "year_founded": 1966,
        "state": "Bihar",
        "city": "Gaya",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,hostel,auditorium,classrooms"
      },
      {
        "name": "SP Bhoyar College",
        "year_founded": null,
        "state": "Maharashtra",
        "city": "Wardha",
        "facilities": ""
      },
      {
        "name": "SP College",
        "year_founded": 2005,
        "state": "Uttar Pradesh",
        "city": "Bijnor",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "SPDM Arts Commerce And Science College",
        "year_founded": 1961,
        "state": "Maharashtra",
        "city": "Dhule",
        "facilities": ""
      },
      {
        "name": "SPN Doshi Women's College",
        "year_founded": 1960,
        "state": "Maharashtra",
        "city": "Mumbai",
        "facilities": ""
      },
      {
        "name": "SPU College",
        "year_founded": 1951,
        "state": "Rajasthan",
        "city": "Pali",
        "facilities": ""
      },
      {
        "name": "SR Govt College for Women",
        "year_founded": 1938,
        "state": "Punjab",
        "city": "Amritsar",
        "facilities": ""
      },
      {
        "name": "SRK Post Graduate College",
        "year_founded": 1919,
        "state": "Uttar Pradesh",
        "city": "Firozabad",
        "facilities": "library,laboratory,medical,sports,gym,auditorium,comp labs,cafeteria,hostel,classrooms"
      },
      {
        "name": "SS Arts College and TP Science Institute",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "library,hostel,cafeteria,sports,medical,auditorium"
      },
      {
        "name": "SS Girls College",
        "year_founded": 1970,
        "state": "Maharashtra",
        "city": "Gondiya",
        "facilities": "library,laboratory,comp labs,auditorium,cafeteria"
      },
      {
        "name": "SS Jain Subodh PG College",
        "year_founded": 1954,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "comp labs,sports,cafeteria,laboratory,library,auditorium"
      },
      {
        "name": "SS Jain Subodh PG Mahila Mahavidyalaya - [SSJSMM]",
        "year_founded": 1999,
        "state": "Rajasthan",
        "city": "Jaipur",
        "facilities": "library,hostel,cafeteria,auditorium,library,comp labs,sports,medical"
      },
      {
        "name": "SS Margol College of Arts Science and Commerce",
        "year_founded": 1967,
        "state": "Karnataka",
        "city": "Gulbarga",
        "facilities": "comp labs,sports,cafeteria,library,auditorium,laboratory,medical"
      },
      {
        "name": "S.S. Memorial College - [SSMC]",
        "year_founded": 1972,
        "state": "Jharkhand",
        "city": "Ranchi",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,classrooms,laboratory,comp labs"
      },
      {
        "name": "SSM College of Arts and Science",
        "year_founded": 2006,
        "state": "Tamil Nadu",
        "city": "Namakkal",
        "facilities": "medical,library,comp labs,laboratory,auditorium,sports,cafeteria"
      },
      {
        "name": "S.V. Arts and Science College",
        "year_founded": 1973,
        "state": "Andhra Pradesh",
        "city": "Guntur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "SVD Government Degree College for Women",
        "year_founded": 1983,
        "state": "Andhra Pradesh",
        "city": "Nidadavole",
        "facilities": "library,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "SVKP and Dr KS Raju Arts and Science College",
        "year_founded": 1974,
        "state": "Andhra Pradesh",
        "city": "Godavari",
        "facilities": "comp labs,sports,gym,medical,cafeteria,laboratory,library,auditorium,hostel"
      },
      {
        "name": "SVS Bellubbi Arts and Commerce College",
        "year_founded": 1977,
        "state": "Karnataka",
        "city": "Belgaum",
        "facilities": "medical,library,cafeteria,auditorium,sports,comp labs,laboratory"
      },
      {
        "name": "Sabang Sajani Kanta Mahavidyalaya",
        "year_founded": 1970,
        "state": "West Bengal",
        "city": "Midnapore",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,hostel,gym,sports,security,classrooms,auditorium"
      },
      {
        "name": "Sachchidanand Sinha College",
        "year_founded": 1943,
        "state": "Bihar",
        "city": "Aurangabad",
        "facilities": "cafeteria,medical,library,transport,sports,communication centre,auditorium"
      },
      {
        "name": "Sacred Heart College Chalakudy",
        "year_founded": 1980,
        "state": "Kerala",
        "city": "Thrissur",
        "facilities": "comp labs,sports,medical,library,auditorium,hostel"
      },
      {
        "name": "Sacred Heart College - [SH] Thevara",
        "year_founded": 1944,
        "state": "Kerala",
        "city": "Ernakulam",
        "facilities": "library,laboratory,medical,comp labs,gym,auditorium,cafeteria,sports"
      },
      {
        "name": "Sadanlal Savaldas Khanna Girls Degree College",
        "year_founded": 1975,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "library,laboratory,auditorium,cafeteria"
      },
      {
        "name": "Sadashivrao Mandlik Mahavidyalaya",
        "year_founded": 1990,
        "state": "Maharashtra",
        "city": "Kolhapur",
        "facilities": ""
      },
      {
        "name": "Sadbhavna College",
        "year_founded": null,
        "state": "Punjab",
        "city": "Ludhiana",
        "facilities": "library,medical,comp labs,cafeteria,laboratory,sports,hostel,gym"
      },
      {
        "name": "Sadguru Education Society\\'s College of Physical & College of Education",
        "year_founded": null,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": ""
      },
      {
        "name": "Sahas Degree college",
        "year_founded": 1975,
        "state": "Uttar Pradesh",
        "city": "Jyotiba Phule Nagar",
        "facilities": "library,laboratory,medical,comp labs,cafeteria,sports,gym,auditorium,library"
      },
      {
        "name": "Saheed Mahilal Institute",
        "year_founded": 1963,
        "state": "Haryana",
        "city": "Palwal",
        "facilities": "library,laboratory,medical,sports,gym,comp labs,cafeteria,hostel,auditorium"
      },
      {
        "name": "Sai Degree College",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Barabanki",
        "facilities": "library,laboratory,auditorium,medical,comp labs,cafeteria,sports,gym,hostel"
      },
      {
        "name": "Saifia College of Arts and Commerce",
        "year_founded": null,
        "state": "Madhya Pradesh",
        "city": "Bhopal",
        "facilities": "library,laboratory,medical,sports,comp labs,gym,auditorium,hostel,cafeteria"
      },
      {
        "name": "Saldiha College",
        "year_founded": 1966,
        "state": "West Bengal",
        "city": "Bankura",
        "facilities": "library,laboratory,medical,auditorium,comp labs,cafeteria,hostel,sports,wi-fi campus"
      },
      {
        "name": "Salem Sowdeswari College - [SSC]",
        "year_founded": 1975,
        "state": "Tamil Nadu",
        "city": "Salem",
        "facilities": "sports,medical,cafeteria,library,auditorium,hostel"
      },
      {
        "name": "Salesian College",
        "year_founded": 1938,
        "state": "West Bengal",
        "city": "Darjeeling",
        "facilities": "comp labs,medical,cafeteria,laboratory,library,auditorium,transport"
      },
      {
        "name": "Salipur College",
        "year_founded": 1964,
        "state": "Orissa",
        "city": "Cuttack",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs,laboratory"
      },
      {
        "name": "Saltanat Bahadur (PG) College",
        "year_founded": 1973,
        "state": "Uttar Pradesh",
        "city": "Jaunpur",
        "facilities": "library,hostel,cafeteria,sports,medical,auditorium,comp labs"
      },
      {
        "name": "Samajbhushan Ganpatrao Kalbhor Arts, Science and Commerce College Loni Kalbhor",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,comp labs,laboratory,cafeteria,auditorium,sports"
      },
      {
        "name": "Samaldas Arts College",
        "year_founded": 1885,
        "state": "Gujarat",
        "city": "Bhavnagar",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Samanta Chandra Sekhar College  (Autonomous)",
        "year_founded": 1944,
        "state": "Orissa",
        "city": "Puri",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Samarpan Arts and Commerce College",
        "year_founded": 1996,
        "state": "Gujarat",
        "city": "Gandhi Nagar",
        "facilities": "library,medical,comp labs,cafeteria,auditorium,gym,sports,hostel,laboratory"
      },
      {
        "name": "Samastipur College",
        "year_founded": 1947,
        "state": "Bihar",
        "city": "Samastipur",
        "facilities": "library,hostel,cafeteria,auditorium,sports,medical,comp labs"
      },
      {
        "name": "Sambhunath College Labpur",
        "year_founded": 1963,
        "state": "West Bengal",
        "city": "Birbhum",
        "facilities": "comp labs,library,sports,cafeteria,auditorium,medical,classrooms,laboratory,security"
      },
      {
        "name": "Samdariya Balika Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sammilani Mahavidyalaya",
        "year_founded": 1996,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,sports,comp labs,laboratory,library,auditorium,cafeteria,classrooms,wi-fi campus"
      },
      {
        "name": "Samsi College",
        "year_founded": 1968,
        "state": "West Bengal",
        "city": "Malda",
        "facilities": "comp labs,library,cafeteria,medical,hostel,sports,classrooms,auditorium"
      },
      {
        "name": "Sanatan Dharam College - [SDC]",
        "year_founded": 1916,
        "state": "Haryana",
        "city": "Ambala",
        "facilities": ""
      },
      {
        "name": "Sanatana Dharma College - [SDC]",
        "year_founded": 1946,
        "state": "Kerala",
        "city": "Alappuzha",
        "facilities": "cafeteria,laboratory,library"
      },
      {
        "name": "Sangameshwar College",
        "year_founded": 1953,
        "state": "Maharashtra",
        "city": "Solapur",
        "facilities": "classrooms,canteen,comp labs,library,laboratory,medical,auditorium"
      },
      {
        "name": "Sangola College",
        "year_founded": 1978,
        "state": "Maharashtra",
        "city": "Solapur",
        "facilities": ""
      },
      {
        "name": "Sanjay Gandhi Mahila College - [SGMC]",
        "year_founded": 1980,
        "state": "Bihar",
        "city": "Gaya",
        "facilities": "medical,laboratory,classrooms"
      },
      {
        "name": "Sanjay Malviya Degree College",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Allahabad",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sankardev College",
        "year_founded": 1962,
        "state": "Meghalaya",
        "city": "Shillong",
        "facilities": "cafeteria,library,laboratory,medical,auditorium,sports,hostel"
      },
      {
        "name": "Sanlok Institute of Management and Information Technology - [SIMIT]",
        "year_founded": 1987,
        "state": "Haryana",
        "city": "Gurgaon",
        "facilities": "cafeteria,library,laboratory,comp labs,medical"
      },
      {
        "name": "Sant Bheekha Das Ramjas Mahavidyalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Faizabad",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Sant Hira Dass Kanya Maha Vidyalaya",
        "year_founded": 1986,
        "state": "Punjab",
        "city": "Kapurthala",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sant Paramhans Guru Prasad Balika Mahavidhayalaya",
        "year_founded": null,
        "state": "Uttar Pradesh",
        "city": "Faizabad",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Sant Pathik Mahavidyalaya - [SPM] Subeha",
        "year_founded": 2009,
        "state": "Uttar Pradesh",
        "city": "Barabanki",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Ramakrishna Vivekananda Mission Sarada Ma Girls College",
        "year_founded": 2006,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "medical,sports,library,laboratory,cafeteria,auditorium,comp labs,classrooms"
      },
      {
        "name": "Saraighat College",
        "year_founded": 1981,
        "state": "Assam",
        "city": "Dispur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sardar Singh Shivraj Singh Mahavidyalaya",
        "year_founded": 2002,
        "state": "Uttar Pradesh",
        "city": "Sitapur",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sardar Vallabhbhai Patel Arts and Science College",
        "year_founded": 1993,
        "state": "Maharashtra",
        "city": "Jalgaon",
        "facilities": ""
      },
      {
        "name": "Sarhad College of Arts, Commerce & Science",
        "year_founded": 1984,
        "state": "Maharashtra",
        "city": "Pune",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      },
      {
        "name": "Sarojini Naidu Vanita Mahavidyalaya - [SNVMV]",
        "year_founded": 1962,
        "state": "Telangana",
        "city": "Hyderabad",
        "facilities": "comp labs,cafeteria,laboratory,library,auditorium,hostel,sports,medical,classrooms,security"
      },
      {
        "name": "Sarsa College of Arts and Sciences",
        "year_founded": null,
        "state": "Karnataka",
        "city": "Mangalore",
        "facilities": "comp labs,sports,cafeteria,library,hostel,gym,medical,auditorium,laboratory"
      },
      {
        "name": "Sarsuna College",
        "year_founded": 1999,
        "state": "West Bengal",
        "city": "Kolkata",
        "facilities": "e-classroom,auditorium,cafeteria,sports,medical,comp labs,library,laboratory,classrooms"
      },
      {
        "name": "Sarvodaya Vidyapeeth Post Graduate College - [SVPGC]",
        "year_founded": 1976,
        "state": "Uttar Pradesh",
        "city": "Rae Bareli",
        "facilities": "medical,hostel,gym,sports,library,laboratory,cafeteria,auditorium,comp labs"
      }
    ],
  };
  

  handleCellClick(event: any) {
    console.log('cellClicked', event);
  }

  handleRowClick(event: any) {
    console.log('rowClicked', event);
  }

  handleBeforeLoad(event: any) {
    console.log('beforeLoad', event);
  }

  handleGridLoad(event: any) {
    console.log('load', event);
  }
  handleGridReady(event: any) {
    console.log('ready', event);
  }

}
