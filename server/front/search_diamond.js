const route = require('express').Router();
const sql = require("mssql");
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options:{encrypt:false}
};


route.get('/', (req, res) => {
    res.send('default route for userpanel FRONT');
});


route.post('/searchDiamond', (req, res) => {


    console.log('search function');
    console.log(JSON.stringify(req.body));

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);


        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('S_Code', sql.VarChar(30), req.body.S_Code);

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
        request.input('Origin', sql.VarChar(30), req.body.Origin);
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute(spName).then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});
route.post('/getResultCount', (req, res) => {


    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        //console.log('req.body start ');
        //console.log(JSON.stringify(req.body));
        //console.log('req.body end ');



        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('S_Code', sql.VarChar(30), req.body.S_Code);

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
        request.input('Origin', sql.VarChar(30), req.body.Origin);
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        // if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        // if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute('WB_DiamondResult_Count').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                //console.log('this his search res');
                //console.log();
                //console.log(JSON.stringify(recordsets.recordset));
                //console.log();
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});


route.post('/fancyintensity', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_ColIntensity').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});
route.post('/fancyovertone', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_ColOvertone').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});
route.post('/fancycolor', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_FancyColor').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});



route.post('/getLocations', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_LocationMast').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/getOrigins', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_OriginMast').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/getShade', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        // request.input('PAGENAME', sql.VarChar(30), 'NewArrivals.aspx');
        request.execute('WB_Fill_BSHDMAST').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});


route.post('/getHNAMst', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.query('select * from HAMast', function(errQuerygetHNAMst, recordsets) {
            if(errQuerygetHNAMst){ console.log(errQuerygetHNAMst); }
            conn.close();


            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }

        });



    }).catch(function (err) {
        console.log(err);
    });
});

route.post('/getLUSTMst', (req, res) => {

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.query('select * from LustMast', function(errQuerygetHNAMst, recordsets) {
            if(errQuerygetHNAMst){ console.log(errQuerygetHNAMst); }
            conn.close();


            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }

        });



    }).catch(function (err) {
        console.log(err);
    });
});


route.post('/downloadPDF', (req, res) => {

    // console.log('downloadPDF Func post data');
    // console.log(req.body);

    console.log('req.body start downloadPDF FUNCTION');
    console.log(JSON.stringify(req.body));
    console.log('req.body end ');


    //call search diamond sp starts
    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);



        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");
        request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
        request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor && req.body.whiteColor=="true"){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute(spName).then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset){
                console.log('print this data to pdf');
                console.log();
                console.log(JSON.stringify(recordsets.recordset));
                console.log();
                //res.json({success: true, data: recordsets.recordset})







                var path = require('path');
                var PdfPrinter = require('../libs/pdfkit/src/printer');
                var fs = require('fs');
                var printer = new PdfPrinter({
                    Roboto: {
                        normal: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
                        bold: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
                        italics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Italic.ttf'),
                        bolditalics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-MediumItalic.ttf')
                    }
                });


                var tblbodyBkp = [

                    //table header
                    [
                        { text: "Particulars vijanan", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Schedule Date", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Amount", style: ['tblhead'],border: [false, false, false, false]},
                    ],


                    //tbody
                    [
                        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                    ],
                    [
                        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                    ],
                    [
                        { text: "kkkkkkk",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:12,style: ['tbldata'],border: [false, false, false, false]},
                    ],
                    [
                        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                    ],
                    [
                        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                    ],
                    [
                        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                    ],


                    //table footer
                    // [
                    //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
                    //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
                    //   { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
                    // ],

                ];

                var tblbody = [
                    [
                        { text: "PId kkm", style: ['tblhead'],border: [false, false, false, false]},
                        // { text: "IsBPD", style: ['tblhead'],border: [false, false, false, false]},
                        // { text: "EVENTPKTNO", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "S_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Carat", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GC_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GQ_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GCT_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GPO_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GSY_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GFL_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GRap", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Disc", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "GRate", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "CR_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "NGS", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "EC_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "BSHD_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Meas", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "TotDepth", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Table1", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Ratio", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "origin", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "Loc_Name", style: ['tblhead'],border: [false, false, false, false]},
                        { text: "CertNo", style: ['tblhead'],border: [false, false, false, false]},
                    ]
                ];
                recordsets.recordset.forEach(function(record) {
                    tblbody.push(
                        [
                            { text: record["PId"]?record["PId"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            // { text: record["IsBPD"]?record["IsBPD"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            // { text: record["EVENTPKTNO"]?record["EVENTPKTNO"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["S_Name"]?record["S_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Carat"]?record["Carat"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GC_Name"]?record["GC_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GQ_Name"]?record["GQ_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GCT_Name"]?record["GCT_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GPO_Name"]?record["GPO_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GSY_Name"]?record["GSY_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GFL_Name"]?record["GFL_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GRap"]?record["GRap"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Disc"]?record["Disc"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["GRate"]?record["GRate"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["CR_Name"]?record["CR_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["NGS"]?record["NGS"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["EC_Name"]?record["EC_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["BSHD_Name"]?record["BSHD_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Meas"]?record["Meas"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["TotDepth"]?record["TotDepth"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Table1"]?record["Table1"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Ratio"]?record["Ratio"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["origin"]?record["origin"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["Loc_Name"]?record["Loc_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                            { text: record["CertNo"]?record["CertNo"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        ]
                    )
                });


                var docDefinitioncreated = {
                    content: [
                        {

                            alignment:"justify",
                            table: {
                                //widths: [161,161,161],
                                //heights: [23,23,23],
                                body: tblbody,
                            },
                            // layout: 'lightHorizontalLines',

                        }
                    ],
                    styles: {
                        header: { fontSize: 10 },
                        bigger: { fontSize: 10, italics: true },
                        tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, alignment:"center" },
                        tbldata: { alignment:"center" }
                    },
                    // styles: {
                    //     header: { fontSize: 18 },
                    //     bigger: { fontSize: 15, italics: true },
                    //     tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
                    //     tbldata: { margin: [0, 3], alignment:"center" }
                    // },
                    defaultStyle: { columnGap: 1 }
                };

                var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);


                let buffers = [];
                pdfDoc.on('data', buffers.push.bind(buffers));
                pdfDoc.on('end', () => {

                    let pdfData = Buffer.concat(buffers);
                    res.writeHead(200, {
                        'Content-Length': Buffer.byteLength(pdfData),
                        'Content-Type': 'application/pdf',
                        'Content-disposition': 'attachment;filename=list.pdf',}).end(pdfData);

                });
                pdfDoc.end();








            }else{
                res.json({success: false, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    //call search diamond sp ends








});

route.post('/downloadXLS', (req, res) => {

    //call search diamond sp starts
    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");
        request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
        request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor && req.body.whiteColor=="true"){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute(spName).then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset){

                const Excel = require('exceljs');
                const fs = require('fs');
                const path = require('path');
                const workbook = new Excel.Workbook();
                const worksheet = workbook.addWorksheet("Narola Gems");

                worksheet.columns = [
                    {header: 'srno', key: 'srno', width: 7},
                    {header: 'PId', key: 'PId', width: 10},
                    {header: 'S_Name', key: 'S_Name', width: 12},
                    {header: 'GC_Name', key: 'GC_Name', width: 20},
                    {header: 'GQ_Name', key: 'GQ_Name', width: 10},
                    {header: 'Carat', key: 'Carat', width: 10},
                    {header: 'GRap', key: 'GRap', width: 10},
                    {header: 'Disc', key: 'Disc', width: 10},
                    {header: 'GRate', key: 'GRate', width: 10},
                    {header: 'Total', key: 'Total', width: 10},
                    {header: 'GCT_Name', key: 'GCT_Name', width: 9},
                    {header: 'GPO_Name', key: 'GPO_Name', width: 9},
                    {header: 'GSY_Name', key: 'GSY_Name', width: 9},
                    {header: 'GFL_Name', key: 'GFL_Name', width: 10},
                    {header: 'CR_Name', key: 'CR_Name', width: 10},
                    {header: 'CertNo', key: 'CertNo', width: 10},
                    {header: 'Meas', key: 'Meas', width: 10},
                    {header: 'TotDepth', key: 'TotDepth', width: 10},
                    {header: 'Table1', key: 'Table1', width: 10},
                    {header: 'BSHD_Name', key: 'BSHD_Name', width: 10},
                    {header: 'NGS', key: 'NGS', width: 10},
                    {header: 'EC_Name', key: 'EC_Name', width: 10},
                ];

                [1,2,3,4].forEach(function(record) {
                    worksheet.addRow({
                        srno: 'SrNo',
                        PId: 'StoneId',
                        S_Name: 'Shape',
                        GC_Name: 'Color',
                        GQ_Name: 'Clarity',
                        Carat: 'Carat',
                        GRap: 'Rap',
                        Disc: 'Disc%',
                        GRate: 'PerCarat',
                        Total: 'Amount',
                        GCT_Name: 'Cut',
                        GPO_Name: 'Pol',
                        GSY_Name: 'Sym',
                        GFL_Name: 'Flo',
                        CR_Name: 'Lab',
                        CertNo: 'ReportNo',
                        Meas: 'Measurement',
                        TotDepth: 'Depth%',
                        Table1: 'Table%',
                        BSHD_Name: 'Shade',
                        NGS: 'NGS Comment',
                        EC_Name: 'EyeClean',
                    });
                });

                recordsets.recordset.forEach(function(record,index) {
                    worksheet.addRow({
                        srno: index+1,
                        PId: record['PId'],
                        S_Name: record['S_Name'],
                        GC_Name: record['GC_Name'],
                        GQ_Name: record['GQ_Name'],
                        Carat: record['Carat'],
                        GRap: record['GRap'],
                        Disc: record['Disc'],
                        GRate: record['GRate'],
                        Total: record['Total'],
                        GCT_Name: record['GCT_Name'],
                        GPO_Name: record['GPO_Name'],
                        GSY_Name: record['GSY_Name'],
                        GFL_Name: record['GFL_Name'],
                        CR_Name: record['CR_Name'],
                        CertNo: record['CertNo'],
                        Meas: record['Meas'],
                        TotDepth: record['TotDepth'],
                        Table1: record['Table1'],
                        BSHD_Name: record['BSHD_Name'],
                        NGS: record['NGS'],
                        EC_Name: record['EC_Name'],
                    });
                });

                let totalCts = avgRap = avgDisc = ctRate = totAmount = fCtRate = fTotAmount = 0;
                totalCts = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Carat);
                },0);

                avgRap = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRap));
                },0);
                avgRap/=totalCts;
                avgRap = avgRap.toFixed(2);

                totAmount = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Total);
                },0);
                totAmount = totAmount.toFixed(2);

                ctRate = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRate));
                },0);
                ctRate/=totalCts;
                ctRate = ctRate.toFixed(2);

                avgDisc = 100-(ctRate/avgRap*100);
                avgDisc = avgDisc.toFixed(2);

                worksheet.getCell('D3').value = recordsets.recordset.length;
                worksheet.getCell('D3').font = {color: { argb: '800080' }, bold: true};
                worksheet.getCell('D4').value = recordsets.recordset.length;
                worksheet.getCell('D4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('F3').value = totalCts;
                worksheet.getCell('F3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('F4').value = totalCts;
                worksheet.getCell('F4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('G3').value = avgRap;
                worksheet.getCell('G3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('G4').value = avgRap;
                worksheet.getCell('G4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('H3').value = avgDisc;
                worksheet.getCell('H3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('H4').value = avgDisc;
                worksheet.getCell('H4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('I3').value = ctRate;
                worksheet.getCell('I3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('I4').value = ctRate;
                worksheet.getCell('I4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('J3').value = totAmount;
                worksheet.getCell('J3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('J4').value = totAmount;
                worksheet.getCell('J4').font = {color: { argb: '008000' }, bold: true};
                // CALCULATION ENDS


                //worksheet.duplicateRow(1,4,true);
                worksheet.mergeCells('A1:B4');
                worksheet.mergeCells('C1:C2');
                worksheet.getCell('A1').value = '';
                worksheet.getCell('A1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FFFFFF'}};

                worksheet.getCell('C1').value = new Date();
                worksheet.getCell('C1').font = {bold: true};

                worksheet.getCell('C2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'EDDA74'}};

                worksheet.getCell('C3').value = 'Total';
                worksheet.getCell('C3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('C4').value = 'Filtered';
                worksheet.getCell('C4').font = {color: { argb: '008000' }, bold: true};

                worksheet.mergeCells('D1:G1');
                worksheet.getCell('D1').value = 'Total';
                worksheet.getCell('D1').font = { bold: true};
                worksheet.getCell('D1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.mergeCells('H1:J1');
                worksheet.getCell('H1').value = 'Rate';
                worksheet.getCell('H1').font = { bold: true};
                worksheet.getCell('H1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('H1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D2:E2');
                worksheet.getCell('D2').value = 'Pcs';
                worksheet.getCell('D2').font = {bold: true};
                worksheet.getCell('D2').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('F2').value = 'Carats';
                worksheet.getCell('F2').font = {bold: true};
                worksheet.getCell('F2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('G2').value = 'Avg Rap';
                worksheet.getCell('G2').font = {bold: true};
                worksheet.getCell('G2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('H2').value = 'Avg Dis';
                worksheet.getCell('H2').font = {bold: true};
                worksheet.getCell('H2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('I2').value = 'Per Carat Rate';
                worksheet.getCell('I2').font = {bold: true};
                worksheet.getCell('I2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('J2').value = 'Total Amount';
                worksheet.getCell('J2').font = {bold: true};
                worksheet.getCell('J2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D3:E3');
                worksheet.getCell('D3').value = '';

                worksheet.mergeCells('D4:E4');
                worksheet.getCell('D4').value = '';

                worksheet.mergeCells('K1:Q4');
                worksheet.getCell('K1').value = '';

                worksheet.mergeCells('R1:Y4');
                worksheet.getCell('R1').value = '';

                var imageId2 = workbook.addImage({
                    buffer: fs.readFileSync(path.join(__dirname, '../../dist/images/new_logo.jpg')),
                    extension: 'png',
                });

                worksheet.addImage(imageId2, {
                    tl: { col: 13.4, row: 0.6 },
                    ext: { width: 60, height: 60 }
                });
                //worksheet.addImage(imageId2, 'K1:Q4');

                worksheet.getRow(5).fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'ADD8E6'}};
                worksheet.getRow(5).font = {bold: true};


                for(let i=1;i<23;i++){
                    worksheet.getColumn(i).alignment = { vertical: 'middle', horizontal: 'center' };
                }
                worksheet.autoFilter = { from: 'A5',to: 'V5'}

                for(let i=1;i<(recordsets.recordset.length+6);i++){
                    worksheet.getRow(i).border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'}};
                    if(recordsets.recordset[i-1] && recordsets.recordset[i-1].PId){
                        worksheet.getCell('B'+(i+5)).value = {
                            text: recordsets.recordset[i-1].PId,
                            hyperlink: 'http://www.narolagems.com?id='+recordsets.recordset[i-1].PId,
                            tooltip: 'www.narolagems.com'
                        }
                        worksheet.getCell('I'+(i+5)).font = {color: { argb: 'FF0000' }}
                        worksheet.getCell('K'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('L'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('M'+(i+5)).font = {color: { argb: '008000' }}
                    }
                }

                 workbook.xlsx.writeBuffer().then(function(buffer) {
                     let xlsData = Buffer.concat([buffer]);
                     res.writeHead(200, {
                         'Content-Length': Buffer.byteLength(xlsData),
                         'Content-Type': 'application/vnd.ms-excel',
                         'Content-disposition': 'attachment;filename=allList.xlsx',}).end(xlsData);
                 });

            }else{
                res.json({success: false, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    //call search diamond sp ends
});

route.post('/mailXLS', (req, res) => {

    //call search diamond sp starts
    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);

        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");
        request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
        request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        // if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), '03/06/2020'); }
        // if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), '03/07/2020'); }

        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        let spName;
        if(req.body.whiteColor){
            spName = 'WB_DiamondResult_Kendo_NEW_Event';
        }else{
            spName = 'WB_DiamondResult_Fancy_Kendo_NEW';
        }

        request.execute(spName).then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset){

                console.log('sitatam');
                console.log(JSON.stringify(recordsets.recordset));
                const Excel = require('exceljs');
                const fs = require('fs');
                const path = require('path');
                const workbook = new Excel.Workbook();
                const worksheet = workbook.addWorksheet("Narola Gems");

                worksheet.columns = [
                    {header: 'srno', key: 'srno', width: 7},
                    {header: 'PId', key: 'PId', width: 10},
                    {header: 'S_Name', key: 'S_Name', width: 12},
                    {header: 'GC_Name', key: 'GC_Name', width: 20},
                    {header: 'GQ_Name', key: 'GQ_Name', width: 10},
                    {header: 'Carat', key: 'Carat', width: 10},
                    {header: 'GRap', key: 'GRap', width: 10},
                    {header: 'Disc', key: 'Disc', width: 10},
                    {header: 'GRate', key: 'GRate', width: 10},
                    {header: 'Total', key: 'Total', width: 10},
                    {header: 'GCT_Name', key: 'GCT_Name', width: 9},
                    {header: 'GPO_Name', key: 'GPO_Name', width: 9},
                    {header: 'GSY_Name', key: 'GSY_Name', width: 9},
                    {header: 'GFL_Name', key: 'GFL_Name', width: 10},
                    {header: 'CR_Name', key: 'CR_Name', width: 10},
                    {header: 'CertNo', key: 'CertNo', width: 10},
                    {header: 'Meas', key: 'Meas', width: 10},
                    {header: 'TotDepth', key: 'TotDepth', width: 10},
                    {header: 'Table1', key: 'Table1', width: 10},
                    {header: 'BSHD_Name', key: 'BSHD_Name', width: 10},
                    {header: 'NGS', key: 'NGS', width: 10},
                    {header: 'EC_Name', key: 'EC_Name', width: 10},
                ];

                [1,2,3,4].forEach(function(record) {
                    worksheet.addRow({
                        srno: 'SrNo',
                        PId: 'StoneId',
                        S_Name: 'Shape',
                        GC_Name: 'Color',
                        GQ_Name: 'Clarity',
                        Carat: 'Carat',
                        GRap: 'Rap',
                        Disc: 'Disc%',
                        GRate: 'PerCarat',
                        Total: 'Amount',
                        GCT_Name: 'Cut',
                        GPO_Name: 'Pol',
                        GSY_Name: 'Sym',
                        GFL_Name: 'Flo',
                        CR_Name: 'Lab',
                        CertNo: 'ReportNo',
                        Meas: 'Measurement',
                        TotDepth: 'Depth%',
                        Table1: 'Table%',
                        BSHD_Name: 'Shade',
                        NGS: 'NGS Comment',
                        EC_Name: 'EyeClean',
                    });
                });

                recordsets.recordset.forEach(function(record,index) {
                    worksheet.addRow({
                        srno: index+1,
                        PId: record['PId'],
                        S_Name: record['S_Name'],
                        GC_Name: record['GC_Name'],
                        GQ_Name: record['GQ_Name'],
                        Carat: record['Carat'],
                        GRap: record['GRap'],
                        Disc: record['Disc'],
                        GRate: record['GRate'],
                        Total: record['Total'],
                        GCT_Name: record['GCT_Name'],
                        GPO_Name: record['GPO_Name'],
                        GSY_Name: record['GSY_Name'],
                        GFL_Name: record['GFL_Name'],
                        CR_Name: record['CR_Name'],
                        CertNo: record['CertNo'],
                        Meas: record['Meas'],
                        TotDepth: record['TotDepth'],
                        Table1: record['Table1'],
                        BSHD_Name: record['BSHD_Name'],
                        NGS: record['NGS'],
                        EC_Name: record['EC_Name'],
                    });
                });

                let totalCts = avgRap = avgDisc = ctRate = totAmount = fCtRate = fTotAmount = 0;
                totalCts = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Carat);
                },0);

                avgRap = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRap));
                },0);
                avgRap/=totalCts;
                avgRap = avgRap.toFixed(2);

                totAmount = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Total);
                },0);
                totAmount = totAmount.toFixed(2);

                ctRate = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRate));
                },0);
                ctRate/=totalCts;
                ctRate = ctRate.toFixed(2);

                avgDisc = 100-(ctRate/avgRap*100);
                avgDisc = avgDisc.toFixed(2);

                worksheet.getCell('D3').value = recordsets.recordset.length;
                worksheet.getCell('D3').font = {color: { argb: '800080' }, bold: true};
                worksheet.getCell('D4').value = recordsets.recordset.length;
                worksheet.getCell('D4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('F3').value = totalCts;
                worksheet.getCell('F3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('F4').value = totalCts;
                worksheet.getCell('F4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('G3').value = avgRap;
                worksheet.getCell('G3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('G4').value = avgRap;
                worksheet.getCell('G4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('H3').value = avgDisc;
                worksheet.getCell('H3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('H4').value = avgDisc;
                worksheet.getCell('H4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('I3').value = ctRate;
                worksheet.getCell('I3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('I4').value = ctRate;
                worksheet.getCell('I4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('J3').value = totAmount;
                worksheet.getCell('J3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('J4').value = totAmount;
                worksheet.getCell('J4').font = {color: { argb: '008000' }, bold: true};
                // CALCULATION ENDS


                //worksheet.duplicateRow(1,4,true);
                worksheet.mergeCells('A1:B4');
                worksheet.mergeCells('C1:C2');
                worksheet.getCell('A1').value = '';
                worksheet.getCell('A1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FFFFFF'}};

                worksheet.getCell('C1').value = new Date();
                worksheet.getCell('C1').font = {bold: true};

                worksheet.getCell('C2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'EDDA74'}};

                worksheet.getCell('C3').value = 'Total';
                worksheet.getCell('C3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('C4').value = 'Filtered';
                worksheet.getCell('C4').font = {color: { argb: '008000' }, bold: true};

                worksheet.mergeCells('D1:G1');
                worksheet.getCell('D1').value = 'Total';
                worksheet.getCell('D1').font = { bold: true};
                worksheet.getCell('D1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.mergeCells('H1:J1');
                worksheet.getCell('H1').value = 'Rate';
                worksheet.getCell('H1').font = { bold: true};
                worksheet.getCell('H1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('H1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D2:E2');
                worksheet.getCell('D2').value = 'Pcs';
                worksheet.getCell('D2').font = {bold: true};
                worksheet.getCell('D2').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('F2').value = 'Carats';
                worksheet.getCell('F2').font = {bold: true};
                worksheet.getCell('F2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('G2').value = 'Avg Rap';
                worksheet.getCell('G2').font = {bold: true};
                worksheet.getCell('G2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('H2').value = 'Avg Dis';
                worksheet.getCell('H2').font = {bold: true};
                worksheet.getCell('H2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('I2').value = 'Per Carat Rate';
                worksheet.getCell('I2').font = {bold: true};
                worksheet.getCell('I2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('J2').value = 'Total Amount';
                worksheet.getCell('J2').font = {bold: true};
                worksheet.getCell('J2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D3:E3');
                worksheet.getCell('D3').value = '';

                worksheet.mergeCells('D4:E4');
                worksheet.getCell('D4').value = '';

                worksheet.mergeCells('K1:Q4');
                worksheet.getCell('K1').value = '';

                worksheet.mergeCells('R1:Y4');
                worksheet.getCell('R1').value = '';

                var imageId2 = workbook.addImage({
                    buffer: fs.readFileSync(path.join(__dirname, '../../dist/images/new_logo.jpg')),
                    extension: 'png',
                });

                worksheet.addImage(imageId2, {
                    tl: { col: 13.4, row: 0.6 },
                    ext: { width: 60, height: 60 }
                });
                //worksheet.addImage(imageId2, 'K1:Q4');

                worksheet.getRow(5).fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'ADD8E6'}};
                worksheet.getRow(5).font = {bold: true};


                for(let i=1;i<23;i++){
                    worksheet.getColumn(i).alignment = { vertical: 'middle', horizontal: 'center' };
                }
                worksheet.autoFilter = { from: 'A5',to: 'V5'}

                for(let i=1;i<(recordsets.recordset.length+6);i++){
                    worksheet.getRow(i).border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'}};
                    if(recordsets.recordset[i-1] && recordsets.recordset[i-1].PId){
                        worksheet.getCell('B'+(i+5)).value = {
                            text: recordsets.recordset[i-1].PId,
                            hyperlink: 'http://www.narolagems.com?id='+recordsets.recordset[i-1].PId,
                            tooltip: 'www.narolagems.com'
                        }
                        worksheet.getCell('I'+(i+5)).font = {color: { argb: 'FF0000' }}
                        worksheet.getCell('K'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('L'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('M'+(i+5)).font = {color: { argb: '008000' }}
                    }
                }

                workbook.xlsx.writeBuffer().then(function(buffer) {

                    let NM = require('../helpers/nodemailer');
                    var path = require('path');

                    var mailOptions = {
                        from: 'test@gmail.com',
                        to: 'vickeyvaghela82@gmail.com',
                        subject: 'report xlsx',
                        text: 'please find the attachment',
                        attachments: [
                            // {   // utf-8 string as an attachment
                            //     filename: 'text1.txt',
                            //     content: 'hello world!'
                            // },
                            {   // binary buffer as an attachment
                                filename: 'vikeshxl.xlsx',
                                content: buffer
                            },
                            // {   // file on disk as an attachment
                            //     filename: 'vikesh.pdf',
                            //     path: path.join(__dirname, '../../dist/pdfs/sallu.pdf')
                            // }
                            // {   // filename and content type is derived from path
                            //     path: '/path/to/file.txt'
                            // },
                            // {   // stream as an attachment
                            //     filename: 'text4.txt',
                            //     content: fs.createReadStream('file.txt')
                            // },
                            // {   // define custom content type for the attachment
                            //     filename: 'text.bin',
                            //     content: 'hello world!',
                            //     contentType: 'text/plain'
                            // },
                            // {   // use URL as an attachment
                            //     filename: 'license.txt',
                            //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                            // },
                            // {   // encoded string as an attachment
                            //     filename: 'text1.txt',
                            //     content: 'aGVsbG8gd29ybGQh',
                            //     encoding: 'base64'
                            // },
                            // {   // data uri as an attachment
                            //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
                            // },
                            // {
                            //     // use pregenerated MIME node
                            //     raw: 'Content-Type: text/plain\r\n' +
                            //     'Content-Disposition: attachment;\r\n' +
                            //     '\r\n' +
                            //     'Hello world!'
                            // }
                        ]
                    };
                    NM.sendSingle(mailOptions);
                    res.json({success: true, data: null, message:"mail sent"})

                });

            }else{
                res.json({success: false, data: null, message:"no data found"})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    //call search diamond sp ends
});


route.get('/downloadXLS-bkp', async (req, res) => {

    const Excel = require('exceljs');
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");

    worksheet.columns = [
        {header: 'Id', key: 'id', width: 10},
        {header: 'Name', key: 'name', width: 32},
        {header: 'D.O.B.', key: 'dob', width: 15,}
    ];

    worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970, 1, 1)});
    worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7)});



    await workbook.xlsx.writeBuffer()
        .then(function(buffer) {
            // done



            let xlsData = Buffer.concat([buffer]);
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(xlsData),
                'Content-Type': 'application/vnd.ms-excel',
                'Content-disposition': 'attachment;filename=allList.xlsx',}).end(xlsData);



        });
    //await workbook.xlsx.writeFile('wwwwwwwwww.xlsx');
    //res.send('selddd')

//  load a copy of export.xlsx
//         const newWorkbook = new Excel.Workbook();
//         await newWorkbook.xlsx.readFile('export.xlsx');
//
//         const newworksheet = newWorkbook.getWorksheet('My Sheet');
//         newworksheet.columns = [
//             {header: 'Id', key: 'id', width: 10},
//             {header: 'Name', key: 'name', width: 32},
//             {header: 'D.O.B.', key: 'dob', width: 15,}
//         ];
//         await newworksheet.addRow({id: 3, name: 'New Guy', dob: new Date(2000, 1, 1)});
//
//         await newWorkbook.xlsx.writeFile('export2.xlsx');
//
//         console.log("File is written");

    //};

    //exTest();


});

route.get('/pdf1', (req, res) => {
    var path = require('path');
    var fonts = {
        Roboto: {
            normal: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
            bold: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Medium.ttf'),
            italics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Italic.ttf'),
            bolditalics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-MediumItalic.ttf')
        }
    };

    var PdfPrinter = require('../libs/pdfkit/src/printer');
    var printer = new PdfPrinter(fonts);
    var fs = require('fs');

    var tblbody = [

        //table header
        [
            { text: "Particulars", style: ['tblhead'],border: [false, false, false, false]},
            { text: "	Schedule Date", style: ['tblhead'],border: [false, false, false, false]},
            { text: "Amount", style: ['tblhead'],border: [false, false, false, false]},
        ],


        //tbody
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "kkkkkkk",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:12,style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],


        //table footer
        // [
        //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
        //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
        //   { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
        // ],

    ];
    var docDefinitioncreated = {
        content: [
            {

                alignment:"justify",
                table: {
                    //widths: [161,161,161],
                    //heights: [23,23,23],
                    body: tblbody,
                },
                // layout: 'lightHorizontalLines',

            }
        ],
        styles: {
            header: { fontSize: 18 },
            bigger: { fontSize: 15, italics: true },
            tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
            tbldata: { margin: [0, 3], alignment:"center" }
        },
        defaultStyle: { columnGap: 10 }
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);
    // pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, '../../dist/pdfs/sallu.pdf')));
    // pdfDoc.end();

    let buffers = [];
    pdfDoc.on('data', buffers.push.bind(buffers));
    pdfDoc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdfData),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=cham.pdf',}).end(pdfData);

    });
    pdfDoc.end();

});

route.get('/pdf', (req, res) => {


    const PDFDocument =  require('pdfkit');
    var myDoc = new PDFDocument();

    let buffers = [];
    myDoc.on('data', buffers.push.bind(buffers));
    myDoc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdfData),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=hash.pdf',}).end(pdfData);

    });

    myDoc.font('Times-Roman').fontSize(12).text(`vik success`).end();



});

route.post('/simpleRequestWithoutPoolExample', (req, res) => {

    //sql.close();
    sql.connect(config, function(conn) {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), 'nik-Peacock');
        request.input('StatusType', sql.VarChar(30), 'S_India');
        request.execute('WB_ConOrdDisp_Kendo_New').then(function(recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordsets && recordsets.recordsets[0]){
                res.json({success:true,data:recordsets.recordsets[0]})
            }else{
                res.json({success:true,data:[]})
            }
            sql.close();
        }).catch(function(err) {
            console.log(err);
            sql.close();
        });
    });

});

route.get('/mail', (req, res) => {
    let NM = require('../helpers/nodemailer');
    var path = require('path');

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'vickeyvaghela82@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy! peasy 3-4-2020',
        attachments: [
            // {   // utf-8 string as an attachment
            //     filename: 'text1.txt',
            //     content: 'hello world!'
            // },
            // {   // binary buffer as an attachment
            //     filename: 'text2.txt',
            //     content: new Buffer('hello world!','utf-8')
            // },
            {   // file on disk as an attachment
                filename: 'vikesh.pdf',
                path: path.join(__dirname, '../../dist/pdfs/sallu.pdf')
            }
            // {   // filename and content type is derived from path
            //     path: '/path/to/file.txt'
            // },
            // {   // stream as an attachment
            //     filename: 'text4.txt',
            //     content: fs.createReadStream('file.txt')
            // },
            // {   // define custom content type for the attachment
            //     filename: 'text.bin',
            //     content: 'hello world!',
            //     contentType: 'text/plain'
            // },
            // {   // use URL as an attachment
            //     filename: 'license.txt',
            //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            // },
            // {   // encoded string as an attachment
            //     filename: 'text1.txt',
            //     content: 'aGVsbG8gd29ybGQh',
            //     encoding: 'base64'
            // },
            // {   // data uri as an attachment
            //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            // },
            // {
            //     // use pregenerated MIME node
            //     raw: 'Content-Type: text/plain\r\n' +
            //     'Content-Disposition: attachment;\r\n' +
            //     '\r\n' +
            //     'Hello world!'
            // }
        ]
    };
    NM.sendAttachment(mailOptions,'url')
    res.send('lets see1111');

});

module.exports = route;

