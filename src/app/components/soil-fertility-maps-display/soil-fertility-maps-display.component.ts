import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soil-fertility-maps-display',
  templateUrl: './soil-fertility-maps-display.component.html',
  styleUrls: ['./soil-fertility-maps-display.component.css']
})
export class SoilFertilityMapsDisplayComponent implements OnInit {

  public statename: any;
  public chemicals=['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn']
  public districtresult:string[] =["",""]
  public districts = [
    ["KURNOOL","KARIMNAGAR","GUNTUR","ANANTPUR","RANGAREDDY","WESTGODAVARI","NIZAMABAD","KRISHNA"],
    ["JORHAT","SIVASAGAR","CACHAR","GOLAGHAT","KAMRUP","LAKHIMPUR","NAGAON","BARPETA","SONITPUR"],
    ["SAMASTIPUR","MUZAFFARPUR","ARWAL","NAWADA","NALANDA","DARBHANGA","PATNA","JEHANABAD","VAISHALI"],
    ["BALOD","BALODBAZAR","BASTAR","BEMETARA","DURG","KABIRDHAM","KORIYA","KORBA","KONDAGAON","MAHASAMUND","RAIGARH","RAIPUR"],
    ["SOUTH GOA","NORTH GOA"],
    ["ANAND","KHEDA","PANCHMAHALS","BHARUCH","AHMEDABAD","SABARKANTHA"],
    ["HISAR","BHIWANI","PANIPAT","FATEHABAD","KAITHAL","SIRSA","KARNAL","JIND","MAHENDRAGARH","KURUKSHETRA"],
    ["HAMIRPUR","BILASPUR","UNA","CHAMBA","MANDI","KANGRA","SHIMLA","SOLAN","KULLU"],
    ["RAMNAGARAM","CHIKBALLAPURA","MYSORE","TUMKUR","HASSAN"],
    ["MALLAPURUM","TRISSHURE","KOZIKODE","PALAKKAD","ALAPPUZHA","WAYANAD","KANNUR"],
    ["JABALPUR","KATNI","SEONI","MANDLA","SHAHADOL","NARSINGHPUR","BHOPAL"],
    ["AKOLA","AURANGABAD","BHANDARA","YAVATMAL","AMARAVATI","BULDHANA","NASIK","CHANDRAPUR","WASHIM","DHULE","SANGALI","SOLAPUR","JALNA","JALGAON","SATARA","PUNE"],
    ["PURI","CUTTACK","BHADRAK","ANUGUL"],
    ["LUDHIANA","JALANDHAR","NAWANSHAHAR","SANGRUR","RUPNAGAR","HOSHIARPUR","BATHINDA","AMRITSAR","FIROZPUR"],
    ["BIKANER","CHURU","GANGANAGAR","JAISALMER","ALWAR","KOTA","BHARATPUR","DHAULPUR"],
    ["THANJAVUR","NAGAPATTINAM","CUDDALORE","THIRUVARUR","TRICHURAPALLI","ERODE","VILLUPURAM","TIRUPPUR"],
    ["KANPURNAGAR","ETAWAH","FARRUKHABAD","CHANDAULI","GORAKHPUR","VARANASI","RAEBARELI","PILIBHIT","SANTRAVIDASNAGAR","ALLAHABAD","LAKHIMPUR"],
    ["UDHAMSINGHNAGAR","HARIDWAR","CHAMPAWAT","NAINITAL"],
    ["JALPAIGURI","BANKURA","NORTH24PARGANAS","HOOGHLY","MURSHIDABAD","BARDHAMAN","NADIA"]
  ]

  public AllstateChemicals = [
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn'],
    ['pH','EC','OC','N','P','K','S','Zn','Fe','Cu','Mn','B']
  ]

  public urlnames = ['ANDHRAPRADESH','ASSAM','BIHAR','CHATTISGARH','GOA','GUJRAT','HARYANA','HIMACHALPRADESH','KARNATAKA','KERALA','MADHAYAPRADESH',
  'MAHARASHTRA','ORISSA','PUNJAB','RAJASTHAN','TAMILNADU','UTTARPRADESH','UTTARAKHAND','WESTBENGAL']

  public imageurl="";

	// pH	EC	OC	N	P	K	S	Zn	Fe	Cu	Mn	B   http://www.iiss.nic.in/Maps/HARYANA/MAPS/KAITHAL_MAPS/KAITHAL_P.jpg
	// pH	EC	OC	N	P	K	S	Zn	Fe	Cu	Mn	B  http://www.iiss.nic.in/Maps/WESTBENGAL/MAPS/BANKURA_MAPS/Bankura_OC.jpg
	// pH	EC	OC	N	P	K	S	Zn	Fe	Cu	Mn	B http://www.iiss.nic.in/Maps/WESTBENGAL/MAPS/HOOGHLY_MAPS/Hooghly_K.jpg
	// pH	EC	OC	N	P	K	S	Zn	Fe	Cu	Mn	B  http://www.iiss.nic.in/Maps/WESTBENGAL/MAPS/MURSHIDABAD_MAPS/Murshidabad_S.jpg
	// pH	EC	OC	N	P	K	S	Zn	Fe	Cu	Mn	B  http://www.iiss.nic.in/Maps/WESTBENGAL/MAPS/BARDHAMAN_MAPS/BardhmanZn.jpg


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.statename = params.get('state');
      console.log(this.statename);
      this.AssignDistrict();
    });
  }

  AssignDistrict()
  {
    var index=0;
    for(let i=0;i<18;i++)
    {
      if(this.urlnames[i]==this.statename)
      {
        index=i;
        break;
      }
    }
    this.districtresult=this.districts[index]
    this.chemicals=this.AllstateChemicals[index]
    
  }

  GetSoilFertilityMap(dist: any,chemical: any)
  {
    this.imageurl=`http://www.iiss.nic.in/Maps/${this.statename}/MAPS/${dist}_MAPS/${chemical}.jpg`
    console.log(this.imageurl);
    
  }

}
