var express = require("express");
var router = express.Router();
const db = require('./dbconnection');

// --------------------------------------------POST METHODS-----------------------------------------------------------------
router.post("/createcomp", function(req, res, next) {
    let sqlQuery = 'INSERT INTO project_db.name_tb ( comp_id, compname, comp_type, domain_name, comp_size, comp_website, comp_linkedin ) values ("'+req.body.usercompanyid+'","'+req.body.usercompanyname+'","'+req.body.userbusinesstype+'","'+req.body.userdomainname+'","'+req.body.usercompanysize+'","'+req.body.usercompanywebsite+'","'+req.body.usercompanylinkedinurl+'")';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record inserted successfully"});
    });
});

router.post("/createcontact", function(req, res, next) {
    let sqlQuery = 'INSERT INTO project_db.contact_tb ( contid, comp_name, firstname, lastname, designation, officemail, personalmail, country, officenumber, personalnumber, linkedin, currentcomp, pastcomp  ) values ("'+req.body.usercontactid+'","'+req.body.usercompanyname+'","'+req.body.userfirstname+'","'+req.body.userlastname+'","'+req.body.userdesignation+'","'+req.body.userofficemail+'","'+req.body.userpersonalmail+'","'+req.body.usercountry+'","'+req.body.userofficenumber+'","'+req.body.userpersonalnumber+'","'+req.body.userlinkedin+'","'+req.body.usercurrentcompany+'","'+req.body.userpastcompany+'")';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record inserted successfully"});
    });
});

router.post("/createevents", function(req, res, next) {
    let sqlQuery = 'INSERT INTO project_db.events_tb ( eventname, startdate, enddate, format, totaldays, category, compname, organiserid, website, budget, freeorpaid, othervendors ) values ("'+req.body.usereventname+'","'+req.body.usereventstartdate+'","'+req.body.usereventenddate+'","'+req.body.usereventformat+'","'+req.body.usereventlength+'","'+req.body.usereventcategory+'","'+req.body.usercompanyname+'","'+req.body.userorganisingcompid+'","'+req.body.usereventwebsite+'","'+req.body.usereventbudget+'","'+req.body.usereventcharge+'","'+req.body.userothervendors+'")';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record inserted successfully"});
    });
});

router.post("/createxhibitors", function(req, res, next) {
    let sqlQuery = 'INSERT INTO project_db.exhibitors_tb ( exid, compname, eventname, businesstype, domainname, compsize, compwebsite, linkedin ) values ("'+req.body.userexhibitorsid+'","'+req.body.userexhibitorscompname+'","'+req.body.usereventname+'","'+req.body.userbusinesstype+'","'+req.body.userdomainname+'","'+req.body.usercompsize+'","'+req.body.usercompwebsite+'","'+req.body.userlinkedin+'")';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record inserted successfully"});
    });
});

// ---------------------------------------------------GET METHODS---------------------------------------------------------------

router.post("/getData", function(req, res, next) {
    let sqlQuery = 'SELECT * FROM project_db.name_tb';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Fetched successfully","data":result});
    });
});

router.post("/getcontactData", function(req, res, next) {
    let sqlQuery = 'SELECT * FROM project_db.contact_tb';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Fetched successfully","data":result});
    });
});

router.post("/geteventsData", function(req, res, next) {
    let sqlQuery = 'SELECT * FROM project_db.events_tb';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Fetched successfully","data":result});
    });
});

router.post("/getexhibitData", function(req, res, next) {
    let sqlQuery = 'SELECT * FROM project_db.exhibitors_tb';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Fetched successfully","data":result});
    });
});

// ----------------------------------------------DELETE METHOD-----------------------------------------------------------------

router.post("/deleteNameData", function(req, res, next) {
    let sqlQuery ='DELETE FROM project_db.name_tb WHERE id='+req.body.userID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Deleted successfully"});
    });
});

router.post("/deleteContactData", function(req, res, next) {
    let sqlQuery ='DELETE FROM project_db.contact_tb WHERE id='+req.body.userID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Deleted successfully"});
    });
});

router.post("/deleteEventsData", function(req, res, next) {
    let sqlQuery ='DELETE FROM project_db.events_tb WHERE id='+req.body.userID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Deleted successfully"});
    });
});

router.post("/deleteExhibitorsData", function(req, res, next) {
    let sqlQuery ='DELETE FROM project_db.exhibitors_tb WHERE id='+req.body.userID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Deleted successfully"});
    });
});

/*-----------------------------------------Fetching particular data for Update---------------------------------------- */

router.post("/getParticularNameData", function(req, res, next) {
    let sqlQuery ='SELECT * FROM project_db.name_tb where id='+req.body.nameID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully","data":result});
    });
});

router.post("/getParticularContactData", function(req, res, next) {
    let sqlQuery ='SELECT * FROM project_db.contact_tb where id='+req.body.contactID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully","data":result});
    });
});

router.post("/getParticularEventsData", function(req, res, next) {
    let sqlQuery ='SELECT * FROM project_db.events_tb where id='+req.body.eventsID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully","data":result});
    });
});

router.post("/getParticularExhibitorsData", function(req, res, next) {
    let sqlQuery ='SELECT * FROM project_db.exhibitors_tb where id='+req.body.exhibitorsID+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully","data":result});
    });
});

// --------------------------------------------UPDATE METHOD-------------------------------------------------------------------//

// router.post("/updateNameData", function(req, res, next) {
//     let sqlQuery ='UPDATE project_db.name_tb SET comp_id="'+req.body.usercompanyid+'", compname="'+req.body.usercompanyname+'", comp_type="'+req.body.userbusinesstype+'", domain_name="'+req.body.userdomainname+'", comp_size="'+req.body.usercompanysize+'", comp_website="'+req.body.usercompanywebsite+'", comp_linkedin="'+req.body.usercompanylinkedinurl+'" WHERE id='+req.body.userID+'';
//     db.query(sqlQuery, function (err, result, fields) {
//         if (err) throw err;
//         res.json({"status":"success","message":"Record Updated successfully"});
//     });
// });

router.post("/updateNameData", function(req, res, next) {
    let sqlQuery ='UPDATE project_db.name_tb SET comp_id="'+req.body.comp_id+'", compname="'+req.body.compname+'", comp_type="'+req.body.comp_type+'", domain_name="'+req.body.domain_name+'", comp_size="'+req.body.comp_size+'", comp_website="'+req.body.comp_website+'", comp_linkedin="'+req.body.comp_linkedin+'" WHERE id='+req.body.id+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully"});
    });
});

router.post("/updateContactData", function(req, res, next) {
    let sqlQuery ='UPDATE project_db.contact_tb SET contid="'+req.body.contid+'", comp_name="'+req.body.comp_name+'", firstname="'+req.body.firstname+'", lastname="'+req.body.lastname+'", designation="'+req.body.designation+'", officemail="'+req.body.officemail+'", personalmail="'+req.body.personalmail+'", country="'+req.body.country+'", officenumber="'+req.body.officenumber+'", personalnumber="'+req.body.personalnumber+'", linkedin="'+req.body.linkedin+'", currentcomp="'+req.body.currentcomp+'", pastcomp="'+req.body.pastcomp+'" WHERE id='+req.body.id+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully"});
    });
});

router.post("/updateEventsData", function(req, res, next) {
    let sqlQuery ='UPDATE project_db.events_tb SET eventname="'+req.body.eventname+'", startdate="'+req.body.startdate+'", enddate="'+req.body.enddate+'", format="'+req.body.format+'", totaldays="'+req.body.totaldays+'", category="'+req.body.category+'", compname="'+req.body.compname+'", organiserid="'+req.body.organiserid+'", website="'+req.body.website+'", budget="'+req.body.budget+'", freeorpaid="'+req.body.freeorpaid+'", othervendors="'+req.body.othervendors+'" WHERE id='+req.body.id+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully"});
    });
});

router.post("/updateExhibitorsData", function(req, res, next) {
    let sqlQuery ='UPDATE project_db.exhibitors_tb SET exid="'+req.body.exid+'", compname="'+req.body.compname+'", eventname="'+req.body.eventname+'", businesstype="'+req.body.businesstype+'", domainname="'+req.body.domainname+'", compsize="'+req.body.compsize+'", compwebsite="'+req.body.compwebsite+'", linkedin="'+req.body.linkedin+'" WHERE id='+req.body.id+'';
    db.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        res.json({"status":"success","message":"Record Updated successfully"});
    });
});

// router.post("/editdata", function(req, res, next) {
//     let sqlQuery = 'UPDATE name_tb SET uedu="'+req.body.useredu+'" where uname="'+req.body.username+'"';
//     db.query(sqlQuery, function (err, result, fields) {
//         if (err) throw err;
//         res.json({"status":"success","message":"Record Updated successfully"});
//     });
// });

//


module.exports = router;