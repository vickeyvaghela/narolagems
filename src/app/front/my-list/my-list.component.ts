import { Component, OnInit, ViewChild, ViewEncapsulation, HostListener  } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Searchdiamond } from '../services/searchdiamond.service'
import {L} from "@angular/cdk/keycodes";
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MyListComponent implements OnInit {

  item = '';
  searchDiamondForm: FormGroup;

  hideSearchForm = false;
  hideSearchFormMeasure = true;

  searchById = null;

  TotalStoneFound = 0;
  searchResultAry: any[] = [
    {
      "PId": "5495-181",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.01,
      "GQ_Name": "I2",
      "GC_Name": "I",
      "ColorName": "I",
      "GRap": 2200,
      "GRate": 1716,
      "Total": 1733.16,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.35,
      "Meas2": 6.39,
      "Meas3": 3.98,
      "Meas": "6.35 - 6.39 X 3.98",
      "TotDepth": 62.4,
      "Table1": 57,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 22,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-MEDIUM",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-11-27T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 22,
      "DISC_NEW": 22.39,
      "GRATE_NEW": 1707.42,
      "AMOUNT_NEW": 1724.49,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5495-181.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5495-181",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5600-32",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 1600,
      "Total": 1600,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.42,
      "Meas2": 6.45,
      "Meas3": 3.9,
      "Meas": "6.42 - 6.45 X 3.90",
      "TotDepth": 60.7,
      "Table1": 60,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 36,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "FTR2",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-MEDIUM",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "75%  EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 27,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-12-19T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 36,
      "DISC_NEW": 36.32,
      "GRATE_NEW": 1592,
      "AMOUNT_NEW": 1592,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM ",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5600-32.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5600-32",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5642-45",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 2,
      "GQ_Name": "I2",
      "GC_Name": "J",
      "ColorName": "J",
      "GRap": 2400,
      "GRate": 1584,
      "Total": 3168,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 8.01,
      "Meas2": 8.06,
      "Meas3": 5.04,
      "Meas": "8.01 - 8.06 X 5.04",
      "TotDepth": 62.81,
      "Table1": 56,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "FNT",
      "CR_Name": "NGS",
      "Disc": 34,
      "BRN_Name": "BLUEISH",
      "BS_SortName": "BLUEISH",
      "BS_Name": "BLUEISH",
      "BSHD_Name": "BLUEISH",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP2",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "N",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 36,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-12-30T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 34,
      "DISC_NEW": 34.33,
      "GRATE_NEW": 1576.08,
      "AMOUNT_NEW": 3152.16,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5642-45.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5642-45",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5957-38",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.06,
      "GQ_Name": "I2",
      "GC_Name": "I",
      "ColorName": "I",
      "GRap": 2200,
      "GRate": 1727,
      "Total": 1830.62,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.5,
      "Meas2": 6.53,
      "Meas3": 4.05,
      "Meas": "6.50 - 6.53 X 4.05",
      "TotDepth": 62.15,
      "Table1": 57,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 21.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "N",
      "TBIN_Name": "NONE",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-18T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 21.5,
      "DISC_NEW": 21.89,
      "GRATE_NEW": 1718.37,
      "AMOUNT_NEW": 1821.47,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5957-38.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5957-38",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5987-10",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.02,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 2962.5,
      "Total": 3021.75,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.4,
      "Meas2": 6.45,
      "Meas3": 4.03,
      "Meas": "6.40 - 6.45 X 4.03",
      "TotDepth": 62.7,
      "Table1": 54,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": -18.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "N",
      "TBIN_Name": "NONE",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "BLACK GROUP OF PINPOINT-1",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-13T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": -18.5,
      "DISC_NEW": -17.91,
      "GRATE_NEW": 2947.69,
      "AMOUNT_NEW": 3006.64,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5987-10.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5987-10",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "6003-11",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 1950,
      "Total": 1950,
      "GCT_Name": "EX",
      "GPO_Name": "VG",
      "GSY_Name": "VG",
      "Meas1": 6.42,
      "Meas2": 6.46,
      "Meas3": 3.88,
      "Meas": "6.42 - 6.46 X 3.88",
      "TotDepth": 60.3,
      "Table1": 62,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 22,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 27,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-16T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 22,
      "DISC_NEW": 22.39,
      "GRATE_NEW": 1940.25,
      "AMOUNT_NEW": 1940.25,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM ",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/6003-11.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=6003-11",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "6003-19",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.01,
      "GQ_Name": "I2",
      "GC_Name": "H",
      "ColorName": "H",
      "GRap": 2300,
      "GRate": 1805.5,
      "Total": 1823.555,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.4,
      "Meas2": 6.42,
      "Meas3": 4.03,
      "Meas": "6.40 - 6.42 X 4.03",
      "TotDepth": 62.9,
      "Table1": 56,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 21.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "FTR2",
      "SOIN_Name": "N",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-18T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 21.5,
      "DISC_NEW": 21.89,
      "GRATE_NEW": 1796.47,
      "AMOUNT_NEW": 1814.44,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/6003-19.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=6003-19",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    }
  ];
  whiteColor = true;

  alllocationSelected = false;
  allshadeSelected = false;
  alloriginSelected = false;

  fancyintensityList: any[] = [];
  fancyovertoneList: any[] = [];
  fancycolorList: any[] = [];

  locationList: any[] = [];
  shadeList: any[] = [];
  originList: any[] = [];
  lustList: any[] = [];
  hnaList: any[] = [];
  caretRange: any[] = [];

  allLustSelected = false;
  allHNASelected = false;

  ex3 = false;
  vg3 = false;
  noex = false;
  novg = false;
  gdofr = false;

  initObj = {
    shape:{
      selectAll:false,
      items:[
        // {name:"All Shape",code:1,selected:false,className:"icon-all_shape"},
        {name:"Round",code:"R",selected:false,className:"icon-round"},
        {name:"Emerald",code:"E",selected:false,className:"icon-Single_9"},
        {name:"Cushion",code:"CU",selected:false,className:"icon-Single_17"},
        {name:"Princess",code:"P",selected:false,className:"icon-Princess"},
        {name:"Marquise",code:"M",selected:false,className:"icon-Single_7"},
        {name:"Pear",code:"PE",selected:false,className:"icon-Single_5"},
        {name:"Heart",code:"H",selected:false,className:"icon-Single_8"},
        {name:"Oval",code:"O",selected:false,className:"icon-Single_6"},
        {name:"SqEmerald",code:"SE",selected:false,className:"icon-Single_3"},
        {name:"Radient",code:"RA",selected:false,className:"icon-Single_2"},
        {name:"Other Shapes",code:"OT",selected:false,className:"icon-Single_14"}
      ],
      selectCount:0
    },
    color:{
      selectAll:false,
      items:[
        {name:"D",code:1,selected:false},
        {name:"E",code:2,selected:false},
        {name:"F",code:3,selected:false},
        {name:"G",code:4,selected:false},
        {name:"H",code:5,selected:false},
        {name:"I",code:6,selected:false},
        {name:"J",code:7,selected:false},
        {name:"K",code:8,selected:false},
        {name:"L",code:9,selected:false},
        {name:"M",code:10,selected:false},
        {name:"N",code:11,selected:false},
        {name:"O",code:12,selected:false},
        {name:"P",code:13,selected:false},
        {name:"Q",code:14,selected:false},
        {name:"R",code:15,selected:false},
        {name:"S",code:16,selected:false},
        {name:"T",code:17,selected:false},
        {name:"U",code:18,selected:false},
        {name:"V",code:19,selected:false},
        {name:"W",code:20,selected:false},
        {name:"X",code:21,selected:false},
        {name:"Y",code:22,selected:false},
        {name:"Z",code:23,selected:false}
      ],
      selectCount:0
    },
    clarity:{
      selectAll:false,
      items:[
        {name:"FL",code:12,selected:false},
        {name:"IF",code:1,selected:false},
        {name:"VVS1",code:2,selected:false},
        {name:"VVS2",code:3,selected:false},
        {name:"VS1 ",code:4,selected:false},
        {name:"VS2",code:5,selected:false},
        {name:"SI1",code:6,selected:false},
        {name:"SI2",code:7,selected:false},
        {name:"I1",code:9,selected:false},
        {name:"I2",code:10,selected:true},
        {name:"I3",code:11,selected:false}
      ],
      selectCount:0
    },
    fluorescence:{
      selectAll:false,
      items:[
        {name:"NON ",code:1,selected:false},
        {name:"VSL",code:2,selected:false},
        {name:"SL",code:3,selected:false},
        {name:"FNT",code:4,selected:false},
        {name:"MED",code:5,selected:false},
        {name:"STG",code:6,selected:false},
        {name:"VST",code:7,selected:false}
      ],
      selectCount:0
    },
    cut:{
      selectAll:false,
      items:[
        {name:"EX",code:1,selected:false},
        {name:"VG",code:2,selected:false},
        {name:"GD",code:3,selected:false},
        {name:"FR",code:4,selected:false}
      ],
      selectCount:0
    },
    eyeClean:{
      selectAll:false,
      items:[
        {name:"100%",code:1,selected:false},
        {name:"75%",code:2,selected:false},
        {name:"NONE",code:3,selected:false}
      ],
      selectCount:0
    },
    lab:{
      selectAll:false,
      items:[
        {name:"GIA",code:2,selected:false},
        {name:"NGS",code:12,selected:false},
        {name:"HRD",code:3,selected:false},
        {name:"IGI",code:1,selected:false}
      ],
      selectCount:0
    },
    symm:{
      selectAll:false,
      items:[
        {name:"EX",code:1,selected:false},
        {name:"VG",code:2,selected:false},
        {name:"GD",code:3,selected:false},
        {name:"FR",code:4,selected:false}
      ],
      selectCount:0
    },
    pol:{
      selectAll:false,
      items:[
        {name:"EX",code:1,selected:false},
        {name:"VG",code:2,selected:false},
        {name:"GD",code:3,selected:false},
        {name:"FR",code:4,selected:false}
      ],
      selectCount:0
    },
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  constructor(private actRoute: ActivatedRoute, public fb: FormBuilder,private searchDiamondServ: Searchdiamond,private datePipe : DatePipe,private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.searchDiamondForm = this.fb.group({
      FCarat: [null],
      TCarat: [null],
      colorControl: [null],
      clarity: [null],
      fluorescence: [null],
      cut: [null],
      eyeClean: [null],
      lab: [null],
      symm: [null],
      pol: [null],
      locationControl:[[]],
      shadeControl:[[]],
      originControl:[[]],

      fancyintensityControl:[[]],
      fancyovertoneControl:[[]],
      fancycolorControl:[[]],

      lustControl: [null],
      hnaControl: [null],

      FLowerHalf:[null],
      TLowerHalf:[null],
      FDepth:[null],
      TDepth:[null],
      FStarLength:[null],
      TStarLength:[null],
      FCAngle:[null],
      TCAngle:[null],
      FPAngle:[null],
      TPAngle:[null],
      FDiscount:[null],
      TDiscount:[null],
      FTable:[null],
      TTable:[null],
      FRatio:[null],
      TRatio:[null],
      FDiameter:[null],
      TDiameter:[null],
      FGirdle:[null],
      TGirdle:[null],
      FPHeight:[null],
      TPHieght:[null],
      FCHeight:[null],
      TCHieght:[null],
      FPRICE:[null],
      TPRICE:[null],

      Fromdate:[null],
      ToDate:[null],
      FromI_date:[null],
      ToI_Date:[null],


      FMeasHeight:[null],
      TMeasHeight:[null],
      FMeasLength:[null],
      TMeasLength:[null],
      FMeasWidth:[null],
      TMeasWidth:[null]
    })
    this.initialize();






    this.actRoute.paramMap.subscribe(params => {
      this.item = params.get('item');
      console.log('this.item ',this.item);


      this.searchDiamondServ.myList({UserId:'nik',item:this.item}).subscribe(myListRes => {
        console.log('myListRes ',myListRes);
        this.dataSource = myListRes.data;

      },error => {
        console.log(error);
      });


    });









  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1._id === o2._id;
  }
  initialize(){

    this.searchDiamondServ.fancyintensity({}).subscribe(fancyintensity => {
      if(fancyintensity && fancyintensity.success && fancyintensity.data){
        if(fancyintensity.data[0]){

          //this.locationList = fancyintensity.data.map((Loc)=>{ return {name:Loc.Loc_Name,code:parseInt(Loc.Loc_Code)}})
          let tempARy = fancyintensity.data.map((Loc)=>{ return {name:Loc.Name,code:1}})

          tempARy.unshift({name:"All",code:0});
          this.fancyintensityList = tempARy;

          if(history.state.defaultSearchData && history.state.defaultSearchData.IntenSity){
            let defaultFilter = this.fancyintensityList.filter(item=>history.state.defaultSearchData.IntenSity.split(',').includes(item.name))
            this.searchDiamondForm.patchValue({ fancyintensityControl:defaultFilter});
          }
        }
      }
    },error => {
      console.log(error);
    });

    this.searchDiamondServ.fancyovertone({}).subscribe(fancyovertone => {
      if(fancyovertone && fancyovertone.success && fancyovertone.data){
        if(fancyovertone.data[0]){
          let tempARy = fancyovertone.data.map((Loc)=>{ return {name:Loc.Name,code:1}})

          tempARy.unshift({name:"All",code:0});
          this.fancyovertoneList = tempARy;
        }
      }
    },error => {
      console.log(error);
    });

    this.searchDiamondServ.fancycolor({}).subscribe(fancycolor => {
      if(fancycolor && fancycolor.success && fancycolor.data){
        if(fancycolor.data[0]){
          let tempARy = fancycolor.data.map((Loc)=>{ return {name:Loc.Name,code:1}})

          tempARy.unshift({name:"All",code:0});
          this.fancycolorList = tempARy;
        }
      }
    },error => {
      console.log(error);
    });


    this.searchDiamondServ.getShade({}).subscribe(shades => {
      if(shades && shades.success && shades.data){
        if(shades.data[0]){
          //this.locationList = shades.data.map((Loc)=>{ return {name:Loc.Loc_Name,code:parseInt(Loc.Loc_Code)}})
          let tempARy = shades.data.map((Loc)=>{ return {name:Loc.BS_NAME,code:parseInt(Loc.BS_CODE)}})

          tempARy.unshift({name:"All",code:0});
          this.shadeList = tempARy;
        }
      }
    },error => {
      console.log(error);

    });

    this.searchDiamondServ.getLocations({}).subscribe(locations => {
      if(locations && locations.success && locations.data){
        if(locations.data[0]){
          //this.locationList = locations.data.map((Loc)=>{ return {name:Loc.Loc_Name,code:parseInt(Loc.Loc_Code)}})
          let tempARy = locations.data.map((Loc)=>{ return {name:Loc.Loc_Name,code:parseInt(Loc.Loc_Code)}})

          tempARy.unshift({name:"All",code:0});
          this.locationList = tempARy;
        }

        if(history.state.defaultSearchData && history.state.defaultSearchData.LocationCode){
          let defaultFilter = this.locationList.filter(item=>history.state.defaultSearchData.LocationCode.split(',').map(item => parseInt(item)).includes(item.code))
          this.searchDiamondForm.patchValue({ locationControl:defaultFilter});
        }
      }
    },error => {
      console.log(error);
    });

    this.searchDiamondServ.getOrigins({}).subscribe(originss => {

      if(originss && originss.success && originss.data){
        if(originss.data[0]){
          //this.locationList = originss.data.map((Loc)=>{ return {name:Loc.Loc_Name,code:parseInt(Loc.Loc_Code)}})
          let tempARy = originss.data.map((Loc)=>{ return Loc.Origin})

          tempARy.unshift("All");
          this.originList = tempARy;

        }
      }
    },error => {
      console.log(error);
    });


    this.searchDiamondServ.getHNAMst({}).subscribe(hnaa => {

      if(hnaa && hnaa.success && hnaa.data){
        if(hnaa.data[0]){
          this.hnaList = hnaa.data.map((Loc)=>{ return {name:Loc.HA_Disp,code:parseInt(Loc.HA_Code)}})
        }
      }

      if(history.state.defaultSearchData && history.state.defaultSearchData.HA_Code){
        this.hnaList = this.hnaList.map((item)=>{
          return { name:item.name, code:item.code,selected:history.state.defaultSearchData.HA_Code.split(',').map(item => parseInt(item)).includes(item.code) }
        })
      }
    },error => {
      console.log(error);
    });

    this.searchDiamondServ.getLUSTMst({}).subscribe(lust => {

      if(lust && lust.success && lust.data){
        if(lust.data[0]){
          this.lustList = lust.data.map((Loc)=>{ return {name:Loc.SortName,code:parseInt(Loc.LU_Code)}})
        }
      }

      if(history.state.defaultSearchData && history.state.defaultSearchData.Lust_Code){
        this.lustList = this.lustList.map((item)=>{
          return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Lust_Code.split(',').map(item => parseInt(item)).includes(item.code) }
        })
      }

    },error => {
      console.log(error);
    });


    if(history.state.defaultSearchData && history.state.defaultSearchData.S_Code){
      this.initObj.shape.items = this.initObj.shape.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.S_Code.split(',').includes(item.code),className:item.className }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Col_Code){
      this.initObj.color.items = this.initObj.color.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Col_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Clarity_Code){
      this.initObj.clarity.items = this.initObj.clarity.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Clarity_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Cut_Code){
      this.initObj.cut.items = this.initObj.cut.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Cut_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Fluorescence_Code){
      this.initObj.fluorescence.items = this.initObj.fluorescence.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Fluorescence_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.EyeClean_Code){
      this.initObj.eyeClean.items = this.initObj.eyeClean.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.EyeClean_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Polish_Code){
      this.initObj.pol.items = this.initObj.pol.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Polish_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Lab_Code){
      this.initObj.lab.items = this.initObj.lab.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Lab_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }

    if(history.state.defaultSearchData && history.state.defaultSearchData.Symmetry_Code){
      this.initObj.symm.items = this.initObj.symm.items.map((item)=>{
        return { name:item.name, code:item.code,selected:history.state.defaultSearchData.Symmetry_Code.split(',').map(item => parseInt(item)).includes(item.code) }
      })
    }


    if(history.state.defaultSearchData && history.state.defaultSearchData.FLowerHalf){
      this.searchDiamondForm.patchValue({ FLowerHalf:history.state.defaultSearchData.FLowerHalf })
    }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TLowerHalf){
      this.searchDiamondForm.patchValue({ TLowerHalf:history.state.defaultSearchData.TLowerHalf })
    }



    if(history.state.defaultSearchData && history.state.defaultSearchData.FTable){ this.searchDiamondForm.patchValue({ FTable:history.state.defaultSearchData.FTable}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TTable){ this.searchDiamondForm.patchValue({ TTable:history.state.defaultSearchData.TTable}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FDiameter){ this.searchDiamondForm.patchValue({ FDiameter:history.state.defaultSearchData.FDiameter}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TDiameter){ this.searchDiamondForm.patchValue({ TDiameter:history.state.defaultSearchData.TDiameter}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FDiscount){ this.searchDiamondForm.patchValue({ FDiscount:history.state.defaultSearchData.FDiscount}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TDiscount){ this.searchDiamondForm.patchValue({ TDiscount:history.state.defaultSearchData.TDiscount}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FGirdle){ this.searchDiamondForm.patchValue({ FGirdle:history.state.defaultSearchData.FGirdle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TGirdle){ this.searchDiamondForm.patchValue({ TGirdle:history.state.defaultSearchData.TGirdle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FPAngle){ this.searchDiamondForm.patchValue({ FPAngle:history.state.defaultSearchData.FPAngle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TPAngle){ this.searchDiamondForm.patchValue({ TPAngle:history.state.defaultSearchData.TPAngle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FPHeight){ this.searchDiamondForm.patchValue({ FPHeight:history.state.defaultSearchData.FPHeight}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TPHieght){ this.searchDiamondForm.patchValue({ TPHieght:history.state.defaultSearchData.TPHieght}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FCHeight){ this.searchDiamondForm.patchValue({ FCHeight:history.state.defaultSearchData.FCHeight}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TCHeight){ this.searchDiamondForm.patchValue({ TCHeight:history.state.defaultSearchData.TCHeight}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FCAngle){ this.searchDiamondForm.patchValue({ FCAngle:history.state.defaultSearchData.FCAngle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TCAngle){ this.searchDiamondForm.patchValue({ TCAngle:history.state.defaultSearchData.TCAngle}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FTotDepth){ this.searchDiamondForm.patchValue({ FTotDepth:history.state.defaultSearchData.FTotDepth}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TTotDepth){ this.searchDiamondForm.patchValue({ TTotDepth:history.state.defaultSearchData.TTotDepth}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FStarLength){ this.searchDiamondForm.patchValue({ FStarLength:history.state.defaultSearchData.FStarLength}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TStarLength){ this.searchDiamondForm.patchValue({ TStarLength:history.state.defaultSearchData.TStarLength}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FLowerHalf){ this.searchDiamondForm.patchValue({ FLowerHalf:history.state.defaultSearchData.FLowerHalf}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TLowerHalf){ this.searchDiamondForm.patchValue({ TLowerHalf:history.state.defaultSearchData.TLowerHalf}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FMeasHeight){ this.searchDiamondForm.patchValue({ FMeasHeight:history.state.defaultSearchData.FMeasHeight}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TMeasHeight){ this.searchDiamondForm.patchValue({ TMeasHeight:history.state.defaultSearchData.TMeasHeight}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FMeasLength){ this.searchDiamondForm.patchValue({ FMeasLength:history.state.defaultSearchData.FMeasLength}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TMeasLength){ this.searchDiamondForm.patchValue({ TMeasLength:history.state.defaultSearchData.TMeasLength}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.FMeasWidth){ this.searchDiamondForm.patchValue({ FMeasWidth:history.state.defaultSearchData.FMeasWidth}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TMeasWidth){ this.searchDiamondForm.patchValue({ TMeasWidth:history.state.defaultSearchData.TMeasWidth}) }

    if(history.state.defaultSearchData && history.state.defaultSearchData.FCarat){ this.searchDiamondForm.patchValue({ FCarat:history.state.defaultSearchData.FCarat}) }
    if(history.state.defaultSearchData && history.state.defaultSearchData.TCarat){ this.searchDiamondForm.patchValue({ TCarat:history.state.defaultSearchData.TCarat}) }

    this.whiteColor = true;

    if(history.state.defaultSearchData && history.state.defaultSearchData.IsFancy){
      this.whiteColor = !history.state.defaultSearchData.IsFancy;
    }



  }

  testFunc(){
    console.log(this.searchDiamondForm.value.fancyintensityControl);
    //console.log(this.locationList);
  }


  checkAll(bool,tarGet){
    if(tarGet=='luster'){
      this.lustList = this.lustList.map((row)=>{
        return {name:row.name,code:row.code,selected:bool}
      })
    }else if(tarGet=='hna'){
      this.hnaList = this.hnaList.map((row)=>{
        return {name:row.name,code:row.code,selected:bool}
      })
    }else{
      if(!bool){ this.initObj[tarGet].selectCount = 0 }

      this.initObj[tarGet].items = this.initObj[tarGet].items.map((row)=>{
        if(tarGet=='shape'){
          return {name:row.name,code:row.code,selected:bool,className:row.className}
        }else{
          return {name:row.name,code:row.code,selected:bool}
        }
      })
    }
    if(!bool){
      this.gdofr = false;
      this.ex3 = false;
      this.vg3 = false;
    }
  }

  unCheckAll(tarGet,TargetVal){

    if(TargetVal!='All' && TargetVal.code!=0){
      if(tarGet=='origin'){

        let AllFilter = this[tarGet+'List'].filter(item=>item!='All')
        let selectedFilter = this.searchDiamondForm.value[tarGet+'Control'].filter(item=>item!='All')

        if(AllFilter.length == selectedFilter.length){
          this.searchDiamondForm.patchValue({ [tarGet+'Control']:['All',...this.searchDiamondForm.value[tarGet+'Control']] });
        }else if(AllFilter.length > selectedFilter.length){
          this.searchDiamondForm.patchValue({ locationControl:this.searchDiamondForm.value.locationControl.filter(item=>item!='All')});
          this.searchDiamondForm.patchValue({ [tarGet+'Control']:this.searchDiamondForm.value[tarGet+'Control'].filter(item=>item!='All')});
        }

      }else if(tarGet=='location' || tarGet=='shade' || tarGet=='fancyintensity' || tarGet=='fancycolor' || tarGet=='fancyovertone'){





        let AllFilter = this[tarGet+'List'].filter(item=>item.code!=0)
        let selectedFilter = this.searchDiamondForm.value[tarGet+'Control'].filter(item=>item.code!=0)

        if(AllFilter.length == selectedFilter.length){

          this.searchDiamondForm.patchValue({ [tarGet+'Control']:[{name:"All",code:0},...this.searchDiamondForm.value[tarGet+'Control']] });

          this['all'+tarGet+'Selected'] = !this['all'+tarGet+'Selected'];

        }else if(AllFilter.length > selectedFilter.length){

          this.searchDiamondForm.patchValue({ locationControl:this.searchDiamondForm.value.locationControl.filter(item=>item.code!=0)});
          this.searchDiamondForm.patchValue({ [tarGet+'Control']:this.searchDiamondForm.value[tarGet+'Control'].filter(item=>item.code!=0)});
        }

      }else if(tarGet=='lust'){
        this.allLustSelected = !this.lustList.some((item)=>!item.selected);
      }else if(tarGet=='hna'){
        this.allHNASelected = !this.hnaList.some((item)=>!item.selected);
      }else{
        //check if atlest one item is not selected
        this.initObj[tarGet].selectAll = !this.initObj[tarGet].items.some((item)=>!item.selected)
      }
    }


  }


  selectSingleChipOption(valueObj,Target){

    if(valueObj=='All' || valueObj.code==0){

      if(this['all'+Target+'Selected']){
        this.searchDiamondForm.controls[Target+'Control'].setValue([]);
      }else{
        this.searchDiamondForm.controls[Target+'Control'].setValue(this[Target+'List']);
      }
      this['all'+Target+'Selected'] = !this['all'+Target+'Selected'];
    }
  }


  removeCaret(caret){
    this.caretRange = this.caretRange.filter(item => item.start!=caret.start && item.end!=caret.end);
  }
  addCaretRange(){
    if(this.searchDiamondForm.value.FCarat && this.searchDiamondForm.value.TCarat){
      this.caretRange.push({start:this.searchDiamondForm.value.FCarat,end:this.searchDiamondForm.value.TCarat})
      this.searchDiamondForm.patchValue({FCarat: null});
      this.searchDiamondForm.patchValue({TCarat: null});
    }
  }

  createGroup(tarGet){

    if(this.initObj[tarGet].selectCount == 2){
      let changeSelectionFromNow = 0;
      for(let i=0;i<this.initObj[tarGet].items.length;i++){
        if(this.initObj[tarGet].items[i].selected){
          changeSelectionFromNow = changeSelectionFromNow==1?3:1
        }else{
          if(changeSelectionFromNow==1){
            this.initObj[tarGet].items[i].selected = true;
          }
        }
      }
    }
  }


  selectSame(Common){
    if(Common=='3ex'){

      this.ex3 = !this.ex3;
      this.initObj.cut.items = this.initObj.cut.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:this.ex3}:item)
      this.initObj.pol.items = this.initObj.pol.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:this.ex3}:item)
      this.initObj.symm.items = this.initObj.symm.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:this.ex3}:item)

    }else if(Common=='3vg'){

      this.vg3 = !this.vg3;
      this.initObj.cut.items = this.initObj.cut.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:this.vg3}:item)
      this.initObj.pol.items = this.initObj.pol.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:this.vg3}:item)
      this.initObj.symm.items = this.initObj.symm.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:this.vg3}:item)

    }else if(Common=='noex'){

      this.ex3 = false;

      this.initObj.cut.items = this.initObj.cut.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:false}:item)
      this.initObj.pol.items = this.initObj.pol.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:false}:item)
      this.initObj.symm.items = this.initObj.symm.items.map(item=>item.name=='EX'?{name:item.name,code:item.code,selected:false}:item)

    }else if(Common=='novg'){
      this.vg3 = false;
      this.initObj.cut.items = this.initObj.cut.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:false}:item)
      this.initObj.pol.items = this.initObj.pol.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:false}:item)
      this.initObj.symm.items = this.initObj.symm.items.map(item=>item.name=='VG'?{name:item.name,code:item.code,selected:false}:item)
    }else if(Common=='gdofr'){
      this.gdofr = !this.gdofr;

      this.initObj.cut.items = this.initObj.cut.items.map(item=>item.name=='GD'||item.name=='FR'?{name:item.name,code:item.code,selected:this.gdofr}:item)
      this.initObj.pol.items = this.initObj.pol.items.map(item=>item.name=='GD'||item.name=='FR'?{name:item.name,code:item.code,selected:this.gdofr}:item)
      this.initObj.symm.items = this.initObj.symm.items.map(item=>item.name=='GD'||item.name=='FR'?{name:item.name,code:item.code,selected:this.gdofr}:item)

    }


    this.initObj['cut'].selectAll = !this.initObj['cut'].items.some((item)=>!item.selected)
    this.initObj['symm'].selectAll = !this.initObj['symm'].items.some((item)=>!item.selected)
    this.initObj['pol'].selectAll = !this.initObj['pol'].items.some((item)=>!item.selected)

  }
  removeSame(bool,ItemName,TarGet){
    if(!bool){

      if(TarGet=='cut'){
        this.initObj.cut.selectAll = false;
      }else if(TarGet=='pol'){
        this.initObj.pol.selectAll = false;
      }else if(TarGet=='symm'){
        this.initObj.symm.selectAll = false;
      }

      if(ItemName.toUpperCase()=='GD'){
        this.gdofr = false;
      }else if(ItemName.toUpperCase()=='EX'){
        this.ex3 = false;
      }else if(ItemName.toUpperCase()=='VG'){
        this.vg3 = false;
      }else if(ItemName.toUpperCase()=='FR'){
        this.gdofr = false;
      }
    }
  }


  createPostData(){
    let finalPostData = {},FinalLocationPost,FinalOriginPost,FinalShadePost;
    let finalColorPost = '';

    let commaJoiner = (TargeT) => { return this.initObj[TargeT].items.filter(item => item.selected).map((item)=>item.code).join(',')}
    let [finalcolorPost,finalclarityPost,finalfluorescencePost,finalcutPost,finaleyeCleanPost,finallabPost,finalsymmPost,finalpolPost,finalShapePost] =
        [commaJoiner('color'),commaJoiner('clarity'),commaJoiner('fluorescence'),commaJoiner('cut'),commaJoiner('eyeClean'),commaJoiner('lab'),commaJoiner('symm'),commaJoiner('pol'),commaJoiner('shape')]


    if(this.searchDiamondForm.value.shadeControl.length>1){
      FinalShadePost = this.searchDiamondForm.value.shadeControl.reduce((commaSep,Elem)=>{
        if(typeof commaSep === 'object'){
          return parseInt(commaSep.code)==0 ? Elem.code : commaSep.code+','+Elem.code;
        }else{
          return commaSep+','+Elem.code;
        }
      })
    }else{
      FinalShadePost = this.searchDiamondForm.value.shadeControl.length==0 ? '' : this.searchDiamondForm.value.shadeControl[0].code;
    }

    if(this.searchDiamondForm.value.locationControl.length>1){
      FinalLocationPost = this.searchDiamondForm.value.locationControl.reduce((commaSep,Elem)=>{
        if(typeof commaSep === 'object'){
          return parseInt(commaSep.code)==0 ? Elem.code : commaSep.code+','+Elem.code;
        }else{
          return commaSep+','+Elem.code;
        }
      })
    }else{
      FinalLocationPost = this.searchDiamondForm.value.locationControl.length==0 ? '' : this.searchDiamondForm.value.locationControl[0].code;
    }

    if(this.searchDiamondForm.value.originControl.length>1){
      FinalOriginPost = this.searchDiamondForm.value.originControl.reduce((commaSep,Elem)=>{
        return commaSep=='All' ? Elem : commaSep+','+Elem;
      })
    }else{
      FinalOriginPost = this.searchDiamondForm.value.originControl.length==0 ? '' : this.searchDiamondForm.value.originControl[0];
    }



    finalPostData['UserId'] = 'nik';
    finalPostData['S_Code'] = finalShapePost;
    finalPostData['whiteColor'] = this.whiteColor;

    if(this.whiteColor){
      finalPostData['Col_Code'] = finalcolorPost;
    }else{
      finalPostData['IntenSity'] = this.searchDiamondForm.value.fancyintensityControl.map(item=>item.name).filter(item=>item.toUpperCase()!='ALL').join(',');
      finalPostData['Overtone'] = this.searchDiamondForm.value.fancyovertoneControl.map(item=>item.name).filter(item=>item.toUpperCase()!='ALL').join(',');
      finalPostData['Fancycolor'] = this.searchDiamondForm.value.fancycolorControl.map(item=>item.name).filter(item=>item.toUpperCase()!='ALL').join(',');
    }

    finalPostData['Clarity_Code'] = finalclarityPost;
    finalPostData['Cut_Code'] = finalcutPost;
    finalPostData['Symmetry_Code'] = finalsymmPost;
    finalPostData['Fluorescence_Code'] = finalfluorescencePost;
    finalPostData['Lab_Code'] = finallabPost;
    finalPostData['Polish_Code'] = finalpolPost;
    finalPostData['EyeClean_Code'] = finaleyeCleanPost;
    finalPostData['LocationCode'] = FinalLocationPost;
    finalPostData['Origin'] = FinalOriginPost;
    finalPostData['shade'] = FinalShadePost;

    finalPostData['Lust_Code'] = this.lustList.filter(item=>item.selected).map(item=>item.code).join(',');
    finalPostData['HA_Code'] = this.hnaList.filter(item=>item.selected).map(item=>item.code).join(',');

    if(this.searchDiamondForm.value.FCarat && this.searchDiamondForm.value.TCarat){
      finalPostData['FCarat'] = this.searchDiamondForm.value.FCarat;
      finalPostData['TCarat'] = this.searchDiamondForm.value.TCarat;
    }else{
      finalPostData['CARATRANGE'] = this.caretRange.join(',');
      finalPostData['CARATRANGE'] = this.caretRange.map(item=>item.start+'-'+item.end).join(',');
    }


    finalPostData['FLowerHalf'] = this.searchDiamondForm.value.FLowerHalf;
    finalPostData['TLowerHalf'] = this.searchDiamondForm.value.TLowerHalf;

    finalPostData['FDepth'] = this.searchDiamondForm.value.FDepth;
    finalPostData['TDepth'] = this.searchDiamondForm.value.TDepth;

    finalPostData['FStarLength'] = this.searchDiamondForm.value.FStarLength;
    finalPostData['TStarLength'] = this.searchDiamondForm.value.TStarLength;



    finalPostData['FCAngle'] = this.searchDiamondForm.value.FCAngle;
    finalPostData['TCAngle'] = this.searchDiamondForm.value.TCAngle;

    finalPostData['FPAngle'] = this.searchDiamondForm.value.FPAngle;
    finalPostData['TPAngle'] = this.searchDiamondForm.value.TPAngle;

    finalPostData['FDiscount'] = this.searchDiamondForm.value.FDiscount;
    finalPostData['TDiscount'] = this.searchDiamondForm.value.TDiscount;

    finalPostData['FTable'] = this.searchDiamondForm.value.FTable;
    finalPostData['TTable'] = this.searchDiamondForm.value.TTable;

    finalPostData['FRatio'] = this.searchDiamondForm.value.FRatio;
    finalPostData['TRatio'] = this.searchDiamondForm.value.TRatio;

    finalPostData['FDiameter'] = this.searchDiamondForm.value.FDiameter;
    finalPostData['TDiameter'] = this.searchDiamondForm.value.TDiameter;

    finalPostData['FGirdle'] = this.searchDiamondForm.value.FGirdle;
    finalPostData['TGirdle'] = this.searchDiamondForm.value.TGirdle;

    finalPostData['FPHeight'] = this.searchDiamondForm.value.FPHeight;
    finalPostData['TPHieght'] = this.searchDiamondForm.value.TPHieght;

    finalPostData['FCHeight'] = this.searchDiamondForm.value.FCHeight;
    finalPostData['TCHieght'] = this.searchDiamondForm.value.TCHieght;

    finalPostData['FPRICE'] = this.searchDiamondForm.value.FPRICE;
    finalPostData['TPRICE'] = this.searchDiamondForm.value.TPRICE;



    finalPostData['Fromdate'] = this.datePipe.transform(this.searchDiamondForm.value.Fromdate, 'MM-dd-yyyy');
    finalPostData['ToDate'] = this.datePipe.transform(this.searchDiamondForm.value.ToDate, 'MM-dd-yyyy');
    finalPostData['FromI_date'] = this.datePipe.transform(this.searchDiamondForm.value.FromI_date, 'MM-dd-yyyy');
    finalPostData['ToI_Date'] = this.datePipe.transform(this.searchDiamondForm.value.ToI_Date, 'MM-dd-yyyy');
    //finalPostData['Fromdate'] = this.searchDiamondForm.value.Fromdate;
    //finalPostData['ToDate'] = this.searchDiamondForm.value.ToDate;


    finalPostData['FMeasHeight'] = this.searchDiamondForm.value.FMeasHeight;
    finalPostData['TMeasHeight'] = this.searchDiamondForm.value.TMeasHeight;
    finalPostData['FMeasLength'] = this.searchDiamondForm.value.FMeasLength;
    finalPostData['TMeasLength'] = this.searchDiamondForm.value.TMeasLength;
    finalPostData['FMeasWidth'] = this.searchDiamondForm.value.FMeasWidth;
    finalPostData['TMeasWidth'] = this.searchDiamondForm.value.TMeasWidth;
    return finalPostData;
  }

  onSubmit(){

    this.searchById = null;
    if(this.TotalStoneFound<=500){
      this.searchDiamondServ.searchDiamond(this.createPostData()).subscribe(searchDiam => {


        if(searchDiam.success && searchDiam.data){
          this.searchResultAry = searchDiam.data;
        }else{
          this.searchResultAry = [];
        }
        console.log(this.searchResultAry)

        this.dataSource = this.searchResultAry;

        if(this.searchResultAry.length>0){
          this.hideSearchForm = true;
          this.hideSearchFormMeasure = true;
        }else{
          this.hideSearchForm = false;
          this.hideSearchFormMeasure = false;
        }

        // this.dataSource = this.searchResultAry.map((item) => {
        //   item.selected = true;
        //   return item;
        // });
        this.TotalStoneFound = this.searchResultAry.length;


      },errorSearchREs => {console.log('errorSearchREs ',errorSearchREs);});
    }else{
      //alert('More then 500 stones found, Please narrow down your search.')
      Swal.fire({
        icon: 'warning',
        title: 'More then 500 stones found, Please narrow down your search.',
        showConfirmButton: false,
        timer: 2500
      })
    }

  }

  saveSearch(evt){


    let tmpobj = {};
    let tmpobj1 = this.createPostData();

    tmpobj['UserId'] = 'nik';
    tmpobj['SearchName'] = evt;

    if(tmpobj1['S_Code']){ tmpobj['S_Code'] = tmpobj1['S_Code']; }
    if(tmpobj1['whiteColor']){ tmpobj['whiteColor'] = tmpobj1['whiteColor']; }
    if(tmpobj1['Col_Code']){ tmpobj['Col_Code'] = tmpobj1['Col_Code']; }
    if(tmpobj1['Clarity_Code']){ tmpobj['Clarity_Code'] = tmpobj1['Clarity_Code']; }
    if(tmpobj1['Cut_Code']){ tmpobj['Cut_Code'] = tmpobj1['Cut_Code']; }
    if(tmpobj1['Symmetry_Code']){ tmpobj['Symmetry_Code'] = tmpobj1['Symmetry_Code']; }
    if(tmpobj1['Fluorescence_Code']){ tmpobj['Fluorescence_Code'] = tmpobj1['Fluorescence_Code']; }
    if(tmpobj1['Lab_Code']){ tmpobj['Lab_Code'] = tmpobj1['Lab_Code']; }
    if(tmpobj1['Polish_Code']){ tmpobj['Polish_Code'] = tmpobj1['Polish_Code']; }
    if(tmpobj1['EyeClean_Code']){ tmpobj['EyeClean_Code'] = tmpobj1['EyeClean_Code']; }
    if(tmpobj1['LocationCode']){ tmpobj['LocationCode'] = tmpobj1['LocationCode']; }
    if(tmpobj1['Lust_Code']){ tmpobj['Lust_Code'] = tmpobj1['Lust_Code']; }
    if(tmpobj1['HA_Code']){ tmpobj['HA_Code'] = tmpobj1['HA_Code']; }
    if(tmpobj1['FCarat']){ tmpobj['FCarat'] = tmpobj1['FCarat']; }
    if(tmpobj1['TCarat']){ tmpobj['TCarat'] = tmpobj1['TCarat']; }
    if(tmpobj1['FLowerHalf']){ tmpobj['FLowerHalf'] = tmpobj1['FLowerHalf']; }
    if(tmpobj1['TLowerHalf']){ tmpobj['TLowerHalf'] = tmpobj1['TLowerHalf']; }
    if(tmpobj1['FDepth']){ tmpobj['FDepth'] = tmpobj1['FDepth']; }
    if(tmpobj1['TDepth']){ tmpobj['TDepth'] = tmpobj1['TDepth']; }
    if(tmpobj1['FStarLength']){ tmpobj['FStarLength'] = tmpobj1['FStarLength']; }
    if(tmpobj1['TStarLength']){ tmpobj['TStarLength'] = tmpobj1['TStarLength']; }
    if(tmpobj1['FCAngle']){ tmpobj['FCAngle'] = tmpobj1['FCAngle']; }
    if(tmpobj1['TCAngle']){ tmpobj['TCAngle'] = tmpobj1['TCAngle']; }
    if(tmpobj1['FPAngle']){ tmpobj['FPAngle'] = tmpobj1['FPAngle']; }
    if(tmpobj1['TPAngle']){ tmpobj['TPAngle'] = tmpobj1['TPAngle']; }
    if(tmpobj1['FDiscount']){ tmpobj['FDiscount'] = tmpobj1['FDiscount']; }
    if(tmpobj1['TDiscount']){ tmpobj['TDiscount'] = tmpobj1['TDiscount']; }
    if(tmpobj1['FTable']){ tmpobj['FTable'] = tmpobj1['FTable']; }
    if(tmpobj1['TTable']){ tmpobj['TTable'] = tmpobj1['TTable']; }
    if(tmpobj1['FRatio']){ tmpobj['FRatio'] = tmpobj1['FRatio']; }
    if(tmpobj1['TRatio']){ tmpobj['TRatio'] = tmpobj1['TRatio']; }
    if(tmpobj1['FDiameter']){ tmpobj['FDiameter'] = tmpobj1['FDiameter']; }
    if(tmpobj1['TDiameter']){ tmpobj['TDiameter'] = tmpobj1['TDiameter']; }
    if(tmpobj1['FGirdle']){ tmpobj['FGirdle'] = tmpobj1['FGirdle']; }
    if(tmpobj1['TGirdle']){ tmpobj['TGirdle'] = tmpobj1['TGirdle']; }
    if(tmpobj1['FPHeight']){ tmpobj['FPHeight'] = tmpobj1['FPHeight']; }
    if(tmpobj1['TPHieght']){ tmpobj['TPHieght'] = tmpobj1['TPHieght']; }
    if(tmpobj1['FCHeight']){ tmpobj['FCHeight'] = tmpobj1['FCHeight']; }
    if(tmpobj1['TCHieght']){ tmpobj['TCHieght'] = tmpobj1['TCHieght']; }
    if(tmpobj1['FMeasHeight']){ tmpobj['FMeasHeight'] = tmpobj1['FMeasHeight']; }
    if(tmpobj1['TMeasHeight']){ tmpobj['TMeasHeight'] = tmpobj1['TMeasHeight']; }
    if(tmpobj1['FMeasLength']){ tmpobj['FMeasLength'] = tmpobj1['FMeasLength']; }
    if(tmpobj1['TMeasLength']){ tmpobj['TMeasLength'] = tmpobj1['TMeasLength']; }
    if(tmpobj1['FMeasWidth']){ tmpobj['FMeasWidth'] = tmpobj1['FMeasWidth']; }
    if(tmpobj1['TMeasWidth']){ tmpobj['TMeasWidth'] = tmpobj1['TMeasWidth']; }
    if(tmpobj1['IntenSity']){ tmpobj['IntenSity'] = tmpobj1['IntenSity']; }
    if(tmpobj1['Overtone']){ tmpobj['Overtone'] = tmpobj1['Overtone']; }
    if(tmpobj1['Fancycolor']){ tmpobj['Fancycolor'] = tmpobj1['Fancycolor']; }
    if(tmpobj1['shade']){ tmpobj['Shade_Code'] = tmpobj1['shade']; }else{ tmpobj['Shade_Code'] = ""; }

    this.searchDiamondServ.saveSearch(tmpobj).subscribe(saveSearch => {

    },errSaveSearch => {console.log('errSaveSearch ',errSaveSearch);});

  }

  @ViewChild('deleteSwal') private deleteSwal: any;
  swalInputValidator(res) {
    if(res.trim()==''){
      return "Please Enter Search Name"
    }else{
      return;
    }
  }

  resetForm(){


    this.ex3 = false;
    this.vg3 = false;
    this.noex = false;
    this.novg = false;
    this.gdofr = false;

    this.initObj = {
      shape:{
        selectAll:false,
        items:[
          // {name:"All Shape",code:1,selected:false,className:"icon-all_shape"},
          {name:"Round",code:"R",selected:false,className:"icon-round"},
          {name:"Emerald",code:"E",selected:false,className:"icon-Single_9"},
          {name:"Cushion",code:"CU",selected:false,className:"icon-Single_17"},
          {name:"Princess",code:"P",selected:false,className:"icon-Princess"},
          {name:"Marquise",code:"M",selected:false,className:"icon-Single_7"},
          {name:"Pear",code:"PE",selected:false,className:"icon-Single_5"},
          {name:"Heart",code:"H",selected:false,className:"icon-Single_8"},
          {name:"Oval",code:"O",selected:false,className:"icon-Single_6"},
          {name:"SqEmerald",code:"SE",selected:false,className:"icon-Single_3"},
          {name:"Radient",code:"RA",selected:false,className:"icon-Single_2"},
          {name:"Other Shapes",code:"OT",selected:false,className:"icon-Single_14"}
        ],
        selectCount:0
      },
      color:{
        selectAll:false,
        items:[
          {name:"D",code:1,selected:false},
          {name:"E",code:2,selected:false},
          {name:"F",code:3,selected:false},
          {name:"G",code:4,selected:false},
          {name:"H",code:5,selected:false},
          {name:"I",code:6,selected:false},
          {name:"J",code:7,selected:false},
          {name:"K",code:8,selected:false},
          {name:"L",code:9,selected:false},
          {name:"M",code:10,selected:false},
          {name:"N",code:11,selected:false},
          {name:"O",code:12,selected:false},
          {name:"P",code:13,selected:false},
          {name:"Q",code:14,selected:false},
          {name:"R",code:15,selected:false},
          {name:"S",code:16,selected:false},
          {name:"T",code:17,selected:false},
          {name:"U",code:18,selected:false},
          {name:"V",code:19,selected:false},
          {name:"W",code:20,selected:false},
          {name:"X",code:21,selected:false},
          {name:"Y",code:22,selected:false},
          {name:"Z",code:23,selected:false}
        ],
        selectCount:0
      },
      clarity:{
        selectAll:false,
        items:[
          {name:"FL",code:12,selected:false},
          {name:"IF",code:1,selected:false},
          {name:"VVS1",code:2,selected:false},
          {name:"VVS2",code:3,selected:false},
          {name:"VS1 ",code:4,selected:false},
          {name:"VS2",code:5,selected:false},
          {name:"SI1",code:6,selected:false},
          {name:"SI2",code:7,selected:false},
          {name:"I1",code:9,selected:false},
          {name:"I2",code:10,selected:false},
          {name:"I3",code:11,selected:false}
        ],
        selectCount:0
      },
      fluorescence:{
        selectAll:false,
        items:[
          {name:"NON ",code:1,selected:false},
          {name:"VSL",code:2,selected:false},
          {name:"SL",code:3,selected:false},
          {name:"FNT",code:4,selected:false},
          {name:"MED",code:5,selected:false},
          {name:"STG",code:6,selected:false},
          {name:"VST",code:7,selected:false}
        ],
        selectCount:0
      },
      cut:{
        selectAll:false,
        items:[
          {name:"EX",code:1,selected:false},
          {name:"VG",code:2,selected:false},
          {name:"GD",code:3,selected:false},
          {name:"FR",code:4,selected:false}
        ],
        selectCount:0
      },
      eyeClean:{
        selectAll:false,
        items:[
          {name:"100%",code:1,selected:false},
          {name:"75%",code:2,selected:false},
          {name:"NONE",code:3,selected:false}
        ],
        selectCount:0
      },
      lab:{
        selectAll:false,
        items:[
          {name:"GIA",code:2,selected:false},
          {name:"NGS",code:12,selected:false},
          {name:"HRD",code:3,selected:false},
          {name:"IGI",code:1,selected:false}
        ],
        selectCount:0
      },
      symm:{
        selectAll:false,
        items:[
          {name:"EX",code:1,selected:false},
          {name:"VG",code:2,selected:false},
          {name:"GD",code:3,selected:false},
          {name:"FR",code:4,selected:false}
        ],
        selectCount:0
      },
      pol:{
        selectAll:false,
        items:[
          {name:"EX",code:1,selected:false},
          {name:"VG",code:2,selected:false},
          {name:"GD",code:3,selected:false},
          {name:"FR",code:4,selected:false}
        ],
        selectCount:0
      },
    }

    this.lustList = this.lustList.map((lust)=>{ return {name:lust.name,code:parseInt(lust.code)}})
    this.allLustSelected = false;

    this.hnaList = this.hnaList.map((hna)=>{ return {name:hna.name,code:parseInt(hna.code)}})
    this.allHNASelected = false;

    this.caretRange = [];

    this.searchDiamondForm.patchValue({
      locationControl:[],
      originControl:[],
      shadeControl:[],

      fancyintensityControl:[[]],
      fancyovertoneControl:[[]],
      fancycolorControl:[[]],

      FCarat:null,
      TCarat:null,

      Fromdate:null,
      ToDate:null,
      FromI_date:null,
      ToI_Date:null,

      FLowerHalf:null,
      TLowerHalf:null,
      FDiscount:null,
      TDiscount:null,
      FTable:null,
      TTable:null,
      FDepth:null,
      TDepth:null,
      FRatio:null,
      TRatio:null,
      FDiameter:null,
      TDiameter:null,
      FStarLength:null,
      TStarLength:null,
      FGirdle:null,
      TGirdle:null,
      FPAngle:null,
      TPAngle:null,
      FCAngle:null,
      TCAngle:null,
      FPHeight:null,
      TPHieght:null,
      FCHeight:null,
      TCHieght:null,
      FPRICE:null,
      TPRICE:null,
      FMeasHeight:null,
      TMeasHeight:null,
      FMeasLength:null,
      TMeasLength:null,
      FMeasWidth:null,
      TMeasWidth:null
    })
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:keydown', ['$event'])
  documentClick(event) {

    setTimeout(()=>{
      this.searchDiamondServ.getResultCount(this.createPostData()).subscribe(searchDiam => {
        if(searchDiam.success && searchDiam.data && searchDiam.data[0] && searchDiam.data[0]['TotalStone']){
          this.TotalStoneFound = parseInt(searchDiam.data[0]['TotalStone']);
        }else{
          this.TotalStoneFound = 0;
        }



      },errorSearchREs => {console.log('errorSearchREs ',errorSearchREs);});
    },100);
  }




  getGlobalDataFrmChild(evtt){
    console.log(' search by id value');
    console.log(evtt);
    this.searchById = evtt;
    this.searchDiamondServ.searchDiamond({StoneList:evtt,UserId:'nik'}).subscribe(searchDiam => {


      if(searchDiam.success && searchDiam.data){
        this.searchResultAry = searchDiam.data;
      }else{
        this.searchResultAry = [];
      }

      this.dataSource = this.searchResultAry;

      // if(this.searchResultAry.length>0){
      //   this.hideSearchForm = true;
      //   this.hideSearchFormMeasure = true;
      // }else{
      //   this.hideSearchForm = false;
      //   this.hideSearchFormMeasure = false;
      // }

      this.hideSearchForm = true;
      this.hideSearchFormMeasure = true;

      // this.dataSource = this.searchResultAry.map((item) => {
      //   item.selected = true;
      //   return item;
      // });
      this.TotalStoneFound = this.searchResultAry.length;

    },errorSearchREs => {console.log('errorSearchREs ',errorSearchREs);});

  }


  //columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  //columnsToDisplay = ['LrHalf','PId','CertNo','S_Name','S_FullName','Carat','GQ_Name','GC_Name','GRate','Total','GCT_Name','GPO_Name','GSY_Name','Meas1','Meas2','Meas3','Meas','TotDepth','Table1','CAngle','PAngle','GFL_Name','CR_Name','Disc','TBIN_Name','BRN_Name','BS_SortName','BS_Name','SIN_Name','TIN_Name','SBIN_Name','SOIN_Name','EF_Name','EC_Name','BSHD_Name','GRap','IsPhoto','Ratio','SpecialDisc','GI_Date','GI_DateDay','IsFancy','ColorName','SZ_CODE','Loc_Name','FGRate','AMOUNT_NEW','GRATE_NEW','DISC_NEW','TSBIN_Name','KeyToSym','EVENTPKTNO','IsBPD','IsMovie','ISEXHIBITION','EXHIBITION_KEY','EXHIBITION_BY','NGS','origin','JanCat','OnlineDiscount','ExportBenefit','TotalBenefit'];
  columnsToDisplay = ['hash','checkbox','PId','IsBPD','S_Name','Carat','GC_Name','GQ_Name','GCT_Name','GPO_Name','GSY_Name','GFL_Name','GRap','Disc','GRate','Total','ftotal','CR_Name','NGS','EC_Name','BSHD_Name','Meas','TotDepth','Table1','Ratio','origin','Loc_Name','CertNo'];


  // dataSource = [
  //   {
  //     position: 1,
  //     name: 'Hydrogen',
  //     weight: 1.0079,
  //     symbol: 'H',
  //     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
  //       atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  //   }, {
  //     position: 2,
  //     name: 'Helium',
  //     weight: 4.0026,
  //     symbol: 'He',
  //     description: `Helium is a chemical element with symbol He and atomic number 2. It is a
  //       colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
  //       group in the periodic table. Its boiling point is the lowest among all the elements.`
  //   }, {
  //     position: 3,
  //     name: 'Lithium',
  //     weight: 6.941,
  //     symbol: 'Li',
  //     description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
  //       silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
  //       lightest solid element.`
  //   }, {
  //     position: 4,
  //     name: 'Beryllium',
  //     weight: 9.0122,
  //     symbol: 'Be',
  //     description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
  //       relatively rare element in the universe, usually occurring as a product of the spallation of
  //       larger atomic nuclei that have collided with cosmic rays.`
  //   }, {
  //     position: 5,
  //     name: 'Boron',
  //     weight: 10.811,
  //     symbol: 'B',
  //     description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
  //       by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
  //       low-abundance element in the Solar system and in the Earth's crust.`
  //   }, {
  //     position: 6,
  //     name: 'Carbon',
  //     weight: 12.0107,
  //     symbol: 'C',
  //     description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
  //       and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
  //       to group 14 of the periodic table.`
  //   }, {
  //     position: 7,
  //     name: 'Nitrogen',
  //     weight: 14.0067,
  //     symbol: 'N',
  //     description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
  //       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  //   }, {
  //     position: 8,
  //     name: 'Oxygen',
  //     weight: 15.9994,
  //     symbol: 'O',
  //     description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
  //        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
  //        agent that readily forms oxides with most elements as well as with other compounds.`
  //   }, {
  //     position: 9,
  //     name: 'Fluorine',
  //     weight: 18.9984,
  //     symbol: 'F',
  //     description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
  //       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
  //       conditions.`
  //   }, {
  //     position: 10,
  //     name: 'Neon',
  //     weight: 20.1797,
  //     symbol: 'Ne',
  //     description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`
  //   },
  // ];

  dataSource1 = [
    {
      "PId": "5495-181",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.01,
      "GQ_Name": "I2",
      "GC_Name": "I",
      "ColorName": "I",
      "GRap": 2200,
      "GRate": 1716,
      "Total": 1733.16,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.35,
      "Meas2": 6.39,
      "Meas3": 3.98,
      "Meas": "6.35 - 6.39 X 3.98",
      "TotDepth": 62.4,
      "Table1": 57,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 22,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-MEDIUM",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-11-27T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 22,
      "DISC_NEW": 22.39,
      "GRATE_NEW": 1707.42,
      "AMOUNT_NEW": 1724.49,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5495-181.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5495-181",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5600-32",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 1600,
      "Total": 1600,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.42,
      "Meas2": 6.45,
      "Meas3": 3.9,
      "Meas": "6.42 - 6.45 X 3.90",
      "TotDepth": 60.7,
      "Table1": 60,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 36,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "FTR2",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-MEDIUM",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "75%  EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 27,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-12-19T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 36,
      "DISC_NEW": 36.32,
      "GRATE_NEW": 1592,
      "AMOUNT_NEW": 1592,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM ",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5600-32.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5600-32",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5642-45",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 2,
      "GQ_Name": "I2",
      "GC_Name": "J",
      "ColorName": "J",
      "GRap": 2400,
      "GRate": 1584,
      "Total": 3168,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 8.01,
      "Meas2": 8.06,
      "Meas3": 5.04,
      "Meas": "8.01 - 8.06 X 5.04",
      "TotDepth": 62.81,
      "Table1": 56,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "FNT",
      "CR_Name": "NGS",
      "Disc": 34,
      "BRN_Name": "BLUEISH",
      "BS_SortName": "BLUEISH",
      "BS_Name": "BLUEISH",
      "BSHD_Name": "BLUEISH",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP2",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "N",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": true,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 36,
      "Loc_Name": "INDIA",
      "GI_Date": "2019-12-30T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 34,
      "DISC_NEW": 34.33,
      "GRATE_NEW": 1576.08,
      "AMOUNT_NEW": 3152.16,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5642-45.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5642-45",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5957-38",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.06,
      "GQ_Name": "I2",
      "GC_Name": "I",
      "ColorName": "I",
      "GRap": 2200,
      "GRate": 1727,
      "Total": 1830.62,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.5,
      "Meas2": 6.53,
      "Meas3": 4.05,
      "Meas": "6.50 - 6.53 X 4.05",
      "TotDepth": 62.15,
      "Table1": 57,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 21.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "N",
      "TBIN_Name": "NONE",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "PINPOINT-SMALL",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-18T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 21.5,
      "DISC_NEW": 21.89,
      "GRATE_NEW": 1718.37,
      "AMOUNT_NEW": 1821.47,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5957-38.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5957-38",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "5987-10",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.02,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 2962.5,
      "Total": 3021.75,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.4,
      "Meas2": 6.45,
      "Meas3": 4.03,
      "Meas": "6.40 - 6.45 X 4.03",
      "TotDepth": 62.7,
      "Table1": 54,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": -18.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "N",
      "TBIN_Name": "NONE",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "BLACK GROUP OF PINPOINT-1",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-13T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": -18.5,
      "DISC_NEW": -17.91,
      "GRATE_NEW": 2947.69,
      "AMOUNT_NEW": 3006.64,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/5987-10.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=5987-10",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "6003-11",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1,
      "GQ_Name": "I2",
      "GC_Name": "F",
      "ColorName": "F",
      "GRap": 2500,
      "GRate": 1950,
      "Total": 1950,
      "GCT_Name": "EX",
      "GPO_Name": "VG",
      "GSY_Name": "VG",
      "Meas1": 6.42,
      "Meas2": 6.46,
      "Meas3": 3.88,
      "Meas": "6.42 - 6.46 X 3.88",
      "TotDepth": 60.3,
      "Table1": 62,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 22,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "GPP1",
      "SOIN_Name": "SM",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "PPT1",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1.01,
      "IsFancy": false,
      "SZ_CODE": 27,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-16T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 22,
      "DISC_NEW": 22.39,
      "GRATE_NEW": 1940.25,
      "AMOUNT_NEW": 1940.25,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM ",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/6003-11.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=6003-11",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    },
    {
      "PId": "6003-19",
      "CertNo": "",
      "S_Name": "R",
      "S_FullName": "ROUND",
      "Carat": 1.01,
      "GQ_Name": "I2",
      "GC_Name": "H",
      "ColorName": "H",
      "GRap": 2300,
      "GRate": 1805.5,
      "Total": 1823.555,
      "GCT_Name": "EX",
      "GPO_Name": "EX",
      "GSY_Name": "EX",
      "Meas1": 6.4,
      "Meas2": 6.42,
      "Meas3": 4.03,
      "Meas": "6.40 - 6.42 X 4.03",
      "TotDepth": 62.9,
      "Table1": 56,
      "CAngle": 0,
      "PAngle": 0,
      "GFL_Name": "NON",
      "CR_Name": "NGS",
      "Disc": 21.5,
      "BRN_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BS_SortName": "N",
      "BS_Name": "NO BROWN , NO GREEN , NO MILKY",
      "BSHD_Name": "NO BROWN , NO GREEN , NO MILKY",
      "EF_Name": "NONE",
      "SIN_Name": "GPP1",
      "TIN_Name": "FTR2",
      "SOIN_Name": "N",
      "TBIN_Name": "PINPOINT-SMALL",
      "SBIN_Name": "PPT2",
      "TSBIN_Name": "PINPOINT-MEDIUM",
      "KeyToSym": "",
      "EC_Name": "NO EYE CLEAN",
      "IsPhoto": false,
      "Ratio": 1,
      "IsFancy": false,
      "SZ_CODE": 28,
      "Loc_Name": "INDIA",
      "GI_Date": "2020-03-18T00:00:00.000Z",
      "GI_DateDay": "0",
      "SpecialDisc": 21.5,
      "DISC_NEW": 21.89,
      "GRATE_NEW": 1796.47,
      "AMOUNT_NEW": 1814.44,
      "EVENTPKTNO": "",
      "IsBPD": 0,
      "IsMovie": 1,
      "ISEXHIBITION": null,
      "EXHIBITION_KEY": null,
      "EXHIBITION_BY": null,
      "NGS": "NGS - NAROLA GRADING SYSTEM",
      "origin": "NONE",
      "JanCat": "",
      "PhotoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/6003-19.JPG",
      "VideoPath": "https://pcknstg.blob.core.windows.net/hdfile/DimImg/360Viewer/HD4/Vision360.html?d=6003-19",
      "CertiPath": "https://narolagems.com/images/NGS.jpg"
    }
  ];
  dataSource = [];

  showDisplayName(param){


    switch (param) {

      case "checkbox":
        return "";
        break;
      case "hash":
        return "#";
        break;
      case "PId":
        return "Stone ID";
        break;
      case "IsBPD":
        return "IsBPD";
        break;
      case "EVENTPKTNO":
        return "Pkt No";
        break;
      case "S_Name":
        return "Shape ";
        break;
      case "Carat":
        return "Carat";
        break;
      case "GC_Name":
        return "Color";
        break;
      case "GQ_Name":
        return "Clarity";
        break;
      case "GCT_Name":
        return "Cut";
        break;
      case "GPO_Name":
        return "Polish";
        break;
      case "GSY_Name":
        return "Sym.";
        break;
      case "GFL_Name":
        return "Flo.";
        break;
      case "GRap":
        return "Rap";
        break;
      case "Disc":
        return "Disc.";
        break;
      case "GRate":
        return "$/Ct.";
        break;
      case "CR_Name":
        return "Lab";
        break;
      case "NGS":
        return "NGS Comment";
        break;
      case "EC_Name":
        return "Eye Clean ";
        break;
      case "BSHD_Name":
        return "Shade";
        break;
      case "Meas":
        return "Measurement";
        break;
      case "TotDepth":
        return "Depth";
        break;
      case "Table1":
        return "Table";
        break;
      case "Ratio":
        return "Ratio";
        break;
      case "origin":
        return "Origin";
        break;
      case "Loc_Name":
        return "Location";
        break;
      case "CertNo":
        return "Certificate No.";
        break;



      default:
        return param;
        break;
    }

  }

  expandedElement: any;

  upOrDown(element,expandedElementttt){
    if(JSON.stringify(expandedElementttt)==JSON.stringify(element)){
      return 'icon-down-arrow';
    }else{
      return 'icon-up_arrow';
    }
  }

  clickTD(targetClass,element){
    if(targetClass=='hash'){
      if(JSON.stringify(this.expandedElement)==JSON.stringify(element)){
        this.expandedElement = null;
      }else{
        this.expandedElement = element;
      }
    }
  }

  selectedStones = [];
  selectStone(element){
    // element.selected = !element.selected;
    // this.selectedStones = this.dataSource.filter(item => item.selected);
    // this.allStoneSelected = this.selectedStones.length==this.dataSource.length;
    // this.doCalculation();
  }

  allStoneSelected = false;
  selectAllStone(){
    // this.allStoneSelected = !this.allStoneSelected;
    // this.dataSource = this.dataSource.map((item) => {
    //   item.selected = this.allStoneSelected;
    //   return item;
    // })
    // this.selectedStones = this.dataSource.filter(item => item.selected);
    // this.doCalculation();
  }

  totalCts = 0;  avgRap:any = 0.00;  avgDisc:any = 0;  ctRate:any = 0;  totAmount:any = 0;  fCtRate = 0;  fTotAmount = 0;
  doCalculation(){
    if(this.selectedStones.length==0){
      this.totalCts = 0;
      this.avgRap = 0;
      this.avgDisc = 0;
      this.ctRate = 0;
      this.totAmount = 0;
      this.fCtRate = 0;
      this.fTotAmount = 0;
    }else{
      this.totalCts = this.selectedStones.reduce((acc, val) => {
        return acc + parseFloat(val.Carat);
      },0);

      this.avgRap = this.selectedStones.reduce((acc, val) => {
        return acc + (parseFloat(val.Carat)*parseFloat(val.GRap));
      },0);
      this.avgRap/=this.totalCts;
      this.avgRap = this.avgRap.toFixed(2);


      this.totAmount = this.selectedStones.reduce((acc, val) => {
        return acc + parseFloat(val.Total);
      },0);
      this.totAmount = this.totAmount.toFixed(2);


      this.ctRate = this.selectedStones.reduce((acc, val) => {
        return acc + (parseFloat(val.Carat)*parseFloat(val.GRate));
      },0);
      this.ctRate/=this.totalCts;
      this.ctRate = this.ctRate.toFixed(2);

      this.avgDisc = 100-(this.ctRate/this.avgRap*100);
      this.avgDisc = this.avgDisc.toFixed(2);
    }


  }

  printDoc(){
    //http://localhost:3000/front/SearchDiamond/pdf
    var mapForm = document.createElement("form");
    //mapForm.target = "_blank";
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = 'http://localhost:3000/front/SearchDiamond/downloadPDF';

    // let obj = {
    //   ssssss:'111111111111111111111111111',
    //   aaaaaa:'rvnn'
    // }
    let obj;
    if(this.searchById){
      obj = {
        UserId:"nik",
        StoneList:this.searchById
      }
    }else{
      obj = this.createPostData();
    }
    //console.log('obj ',obj);

    Object.keys(obj).forEach(function(param){
      if(obj[param]){
        var mapInput = document.createElement("input");
        mapInput.type = "hidden";
        mapInput.name = param;
        mapInput.setAttribute("value", obj[param]);
        mapForm.appendChild(mapInput);
      }
    });
    document.body.appendChild(mapForm);
    mapForm.submit();

  }

  printXLS(){
    //http://localhost:3000/front/SearchDiamond/pdf
    var mapForm = document.createElement("form");
    //mapForm.target = "_blank";
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = 'http://localhost:3000/front/SearchDiamond/downloadXLS';

    // let obj = {
    //   ssssss:'111111111111111111111111111',
    //   aaaaaa:'rvnn'
    // }
    let obj;
    if(this.searchById){
      obj = {
        UserId:"nik",
        StoneList:this.searchById
      }
    }else{
      obj = this.createPostData();
    }

    //console.log('obj ',obj);

    Object.keys(obj).forEach(function(param){
      if(obj[param]){
        var mapInput = document.createElement("input");
        mapInput.type = "hidden";
        mapInput.name = param;
        mapInput.setAttribute("value", obj[param]);
        mapForm.appendChild(mapInput);
      }
    });
    document.body.appendChild(mapForm);
    mapForm.submit();

  }

  mailXLS(){
    if(this.TotalStoneFound<=500){
      let obj;
      if(this.searchById){
        obj = {
          UserId:"nik",
          StoneList:this.searchById
        }
      }else{
        obj = this.createPostData();
      }
      this.searchDiamondServ.mailXLS(obj).subscribe(searchDiam => {

        if(searchDiam.success){
          //alert('Mail sent')
          Swal.fire({
            icon: 'success',
            title: 'Email has been sent successfully!',
            showConfirmButton: false,
            timer: 2500
          })

        }else{
          //alert('some error occured')
          Swal.fire({
            icon: 'error',
            title: 'some error occured',
            showConfirmButton: false,
            timer: 2500
          })
        }

      },errorSearchREs => {console.log('errorSearchREs ',errorSearchREs);});
    }else{
      //alert('More then 500 stones found, Please narrow down your search.')
      Swal.fire({
        icon: 'warning',
        title: 'More then 500 stones found, Please narrow down your search.',
        showConfirmButton: false,
        timer: 2500
      })

    }
  }

  addToBasket(){
    if(this.selectedStones.length>0){

      this.searchDiamondServ.addToBasket({PIdArys:this.selectedStones.map(item => item.PId)}).subscribe(addToBasketRes => {
        console.log(addToBasketRes);
        Swal.fire({
          icon: 'success',
          title: 'Added to basket successfully!!',
          showConfirmButton: false,
          timer: 2500
        })
      },error => {
        console.log(error);
      });

    }else{

      Swal.fire({
        icon: 'warning',
        title: 'Please select stone',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }




}
