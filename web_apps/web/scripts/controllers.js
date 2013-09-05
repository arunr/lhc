function PublicController($scope, $http, $location) {

    $scope.user = {};
    $scope.register = function() {
        console.log("in register");
        console.log($scope.user);
        var request = $http.post('/api/v1/auth/register', {
            username: $scope.user.email,
            password: $scope.user.password,
            college: $scope.user.college
        });
        return request.then(function(response) {
            console.log(response)

        }, function(response) {
            console.log(response)
        });
    }
}

function TypeaheadCtrl($scope) {
    $scope.selected = undefined;
    $scope.colleges = ["National Institute of Fashion Technology (NIFT)",
        "Pearl Academy ",
        "National Institute of Fashion Technology (NIFT)",
        "School of Fashion Technology",
        "Symbiosis Institute of Design",
        "National Institute of Design",
        "National Institute of Fashion Technology (NIFT)",
        "National Institute of Fashion Technology (NIFT)",
        "National Institute of Fashion Technology (NIFT)",
        "JD Institute of Fashion Technology",
        "International Institute of Fashion Design (IIFD)",
        "Sir J J Institute of Applied Art",
        "National Institute of Fashion Technology (NIFT)",
        "National Institute of Fashion Technology (NIFT)",
        "National Institute of Fashion Technology (NIFT)",
        "Center for Environmental Planning and Technology University (CEPT)",
        "Design and innovation academy",
        "National Institute of Creative Communication",
        "Vidya Institute of Fashion Technology",
        "Universal Institute of Design",
        "DJ Academy of Design",
        "Arch Academy of Design",
        "Raffles Design International",
        "DSK Supinfocom International Campus",
        "Srishti",
        "MIT Institute of Design",
        "Institute of Apparel Management",
        "Satyam fashion Institute",
        "GD Goenka School of Fashion & Design",
        "L'Institut Superieur Des Arts Appliques",
        "University of Petroleum and Energy Studies",
        "Vogue Institute of Fashion Technology",
        "Apeejay Institute of Design",
        "Northern India Institute of Fashion Technology",
        "MS University of Baroda-Faculty of Fine Arts",
        "Faculty of Visual Arts- Banaras Hindu University",
        "Faculty of Fine Arts- Jamia Millia Islamia University",
        "Institute of Fine Arts- Viswa Bharti",
        "College of Art- University of Delhi",
        "Banasthali Vidyapeeth",
        "Faculty of Fine Arts- Rabindra Bharti University",
        "College of Fine Arts",
        "Faculty of Arts-Jadavpur University",
        "Symbiosis Institute of Media & Communication",
        "Ramnarain Ruia College",
        "Indraprastha College for Women",
        "Manipal Institute of Communications",
        "Kamla Nehru College for Women",
        "SIES College of Arts, Science and Commerce",
        "KC College of Arts, Science and Commerce",
        "St Andrew's College of Arts, Science and Commerce",
        "Delhi College of Arts and Commerce",
        "Indian Institute of Mass Communication (IIMC)",
        "Mudra Institute of Communications (MICA)",
        "Xaviers Institute of Communication",
        "School of Planning and Architecture",
        "School of Planning and Architecture",
        "School of Planning and Architecture",
        "Narsee Monjee Institute of Management Studies (NMIMS)",
        "Rizvi College of Architecture",
        "Faculty of Engineering, Jadavpur University",
        "Sir JJ College of Architecture",
        "National Law School of India University",
        "Campus Law Centre, Delhi University",
        "National Academy of Legal Studies and Research University",
        "Symbiosis Society's Law College",
        "National Law Institute University",
        "National Law University",
        "The WB National University of Juridical Sciences",
        "Faculty of Law, Aligarh Muslim University",
        "Gujrat National Law University",
        "ILS Law College",
        "Government Law College",
        "Amity Law School",
        "Faculty of Law, Banaras Hindu University",
        "Faculty of Law, Jamia Millia Islamia",
        "Christ College of Law, Christ University",
        "Faculty of Law, University of Kolkata",
        "National University of Advanced Legal Studies",
        "Rajiv Gandhi National University of Law",
        "Faculty of Law, University of Allahabad",
        "Loyola College",
        "Lady Shri Ram College for Women",
        "St. Stephen’s College",
        "St. Xavier’s College",
        "St. Xavier’s College",
        "Christ College, Christ University",
        "Presidency College",
        "Madras Christian College",
        "Stella Maris College",
        "Fergusson College",
        "Miranda House",
        "Presidency College",
        "St. Xavier’s College",
        "Hindu College",
        "Women’s Christian College",
        "St. Joseph’s College",
        "Symbiosis Society’s College of Arts and Commerce",
        "Mount Carmel College",
        "Jesus & Mary College",
        "Hansraj College",
        "Sacred Heart College",
        "Indraprastha College for Women",
        "Loyola Academy Degree & PG College",
        "Kamala Nehru College for Women",
        "Ramjas College",
        "Sri Venkateswara College",
        "Jyoti Nivas College",
        "Elphinstone College",
        "Sophia College for women",
        "Nizam’s College",
        "Somaiya Vidya Vihar",
        "Ethiraj College for Women",
        "Mithibai College of  Arts",
        "Maulana Azad College",
        "Government College for Girls",
        "Queen Mary’s College",
        "Scottish Church College",
        "Jai Hind College",
        "University College for Women",
        "Lady Brabourne College",
        "H.K. Arts College",
        "C.U. Shah Arts College",
        "Vivekananda College",
        "St. Ann’s Degree College for Women",
        "Bhavan’s College",
        "Shri Ram College of Commerce",
        "R A Podar College of Commerce and Economics",
        "KPK Hinduja College of Commerce and Economics",
        "National Degree College",
        "SrI Guru Gobind Singh College of Commerce",
        "Maharani Laxmi Ammanni (MLA) College For Women",
        "MCM D.A.V College for Women",
        "Narsee Monjee School of Commerce and Economics",
        "Indian Institute of Management, (IIM) ",
        "Indian Institute of Management, (IIM) ",
        "Faculty of Management Studies (FMS)",
        "Xaviers Labour Research Insitute(XLRI)",
        "Indian Institute of Management, (IIM) ",
        "Indian Institute of Management, (IIM) ",
        "Narsee Monjee Institute of Management Studies",
        "Management Development Institute(MDI)",
        "Indian Institute of Management (IIM)",
        "S P Jain Institute of management and research",
        "Jamnalal Bajaj Institute of Management Studies",
        "Depertment of Management Studies, IIT Roorkee",
        "Institute of Mangement Technology (IMT)",
        "Symbiosis Institute of Business Management (SIBM)",
        "National Institute of Industrial Engineering (NITIE)",
        "ICFAI Business School",
        "Xavier Institute of Mangement-Bubhaneshwar(XIM-B)",
        "Shailesh J mehta school of Mangement, IIT Bombay",
        "Depertment of Management Studies, IIT Delhi",
        "Symbiosis Centre for Mgmt. and Human Resource Development (SCMHRD)",
        "Prin. L. N. Welingkar Institute of Mgmt. Dev. & Research",
        "Institute of Rural Management Ahmedabad(IRMA)",
        "Indian Institute of Foreign Trade (IIFT)",
        "Symbiosis Institute of International Business (SIIB)",
        "Institute of Technology and Management(ITM) Business School",
        "Indian School of Business (ISB)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Indian Institute of Technology (IIT)",
        "Birla Institute of Technology and Sciences (BITS)",
        "Institute of Technology, Banaras Hindu University",
        "National Institute of Technology (NIT)",
        "National Institute of Technology (NIT)",
        "Delhi Technical University (DTU)",
        "Vellore Institute of Technology (VIT)",
        "Indian Institute of Information Technology (IIIT)",
        "Indian Institute of Information Technology (IIIT)",
        "National Institute of Technology (NIT)",
        "National Institute of Technology (NIT)",
        "National Institute of Technology (SVNIT)",
        "Birla Institute of Technology and Sciences",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "Institute of Hotel Management (IIHM)",
        "All India Institute of Medical Sciences(AIIMS)",
        "Christian Medical College (CMC)",
        "JIPMER",
        "Armed Forces Medical College (AFMC)",
        "Maulana Azad Medical College",
        "Grant Medical College",
        "Madras Medical College",
        "University College of Medical Science and Research Centre",
        "St John's Medical College",
        "Institute of Medical Science, Banarus Hindu Universtiy",
        "King George Medical College-University (KGMC)",
        "Christian Medical College (CMC)",
        "B.J. Medical College and Sassoon Hospital",
        "Kasturba Medical College, Manipal University",
        "Amrita Institute of Medical Science and Research Centre",
        "Bangalore Medical College and Research Institute",
        " Kolkata Medical College and Hospital",
        "Sri Ramachandra Medical College and Research Institute",
        "Institute of Post Graduate Medical Education and Research",
        "SMS Medical College",
        "Osmania Medical College",
        "Government Medical College and Hospital",
        "R.G.Kar Medical College & Hospital",
        "Gandhi Medical College",
        "TN Medical College",
        "Lady Hardinge Medical College",
        "Shreemati Nathibai Damodar Thackersey Women's University",
        "Postgraduate Institute of Medical Education and Research ",
        "Dr D.Y.Patil Vidyapeeth",
        "MGM University of Health Sciences",
        "Bharti Vidyapeeth",
        "Indian Institute of Space Science and Technology (IIST)",
        "Indian Institute of Science (IISc)",
        "Indian Institute of Management, (IIM) ",
        "Sydenham college of commerce and economics",
        "Manipal Institute of Technology",
        "Faculty of Architecture",
        "Manipal College of Dental Sciences (MCODS)",
        "Motilal Nehru National Institute of Technology(MNNIT)",
        "Gargi college",
        "Kirori Mal College (KMC)",
        "Maitreyi college",
        "Indian School of Business (ISB)",
        "Jawaharlal Nehru University, (JNU), Delhi",
        "Delhi School of Economics",
        "National Institute of Fashion Technology (NIFT)"
    ];
}
