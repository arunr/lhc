function PublicController($scope, $http, $location) {

    $scope.user = {};
    $scope.college = {};
    $scope.done = false;
    $scope.errors = false;
    $scope.register = function() {
        var request = $http.post('/api/v1/auth/register', {
            email: $scope.user.email,
            sex: $scope.user.sex,
            college: $scope.user.college
        });
        return request.then(function(response) {
            var res = response.data.status;
            console.log(res);
            if (res !== "error") {
                $scope.done = !$scope.done;
                $scope.errors = false;

            } else {
                $scope.done = !$scope.done;
                $scope.errors = true;
            }
            console.log($scope.done);
            console.log(response);
        }, function(response) {
            $scope.done = !$scope.done;
            $scope.errors = true;
            console.log(response);
        });
    }

    $scope.addCollege = function() {
        console.log($scope.college);
        var request = $http.post('/api/v1/college/signup', {
            email: $scope.college.email,
            name: $scope.college.name,
            city: $scope.college.city
        });
        return request.then(function(response) {
            var res = response.data.status;
            console.log(res);

        }, function(response) {
            var res = response.data.status;
            console.log(res);
        });

    }
}

function TypeaheadCtrl($scope) {
    $scope.selected = undefined;
    $scope.colleges = ["National Institute of Fashion Technology (NIFT),New Delhi",
        "Pearl Academy, New Delhi",
        "National Institute of Fashion Technology (NIFT),Bengaluru",
        "School of Fashion Technology,Pune",
        "Symbiosis Institute of Design,Pune",
        "National Institute of Design,Ahmedabad",
        "National Institute of Fashion Technology (NIFT),Kharghar",
        "National Institute of Fashion Technology (NIFT),Kolkata",
        "National Institute of Fashion Technology (NIFT),Gandhinagar",
        "JD Institute of Fashion Technology,Mumbai",
        "International Institute of Fashion Design (IIFD),Pune",
        "Sir J J Institute of Applied Art,Mumbai",
        "National Institute of Fashion Technology (NIFT),Hyderabad",
        "National Institute of Fashion Technology (NIFT),Jodhpur",
        "National Institute of Fashion Technology (NIFT),Chennai",
        "Center for Environmental Planning and Technology University (CEPT),Ahmedabad",
        "Design and innovation academy,Delhi",
        "National Institute of Creative Communication,Bangalore",
        "Vidya Institute of Fashion Technology,Meerut",
        "Universal Institute of Design,Surat",
        "DJ Academy of Design,Coimbatore",
        "Arch Academy of Design,Jaipur",
        "Raffles Design International,Mumbai",
        "DSK Supinfocom International Campus,Pune",
        "Srishti,Bangalore",
        "MIT Institute of Design,Pune",
        "Institute of Apparel Management,Mumbai",
        "Satyam fashion Institute,Delhi",
        "GD Goenka School of Fashion & Design,Sohna",
        "L'Institut Superieur Des Arts Appliques,Gurgaon",
        "University of Petroleum and Energy Studies,Dehradun",
        "Vogue Institute of Fashion Technology,Bangalore",
        "Apeejay Institute of Design,Delhi",
        "Northern India Institute of Fashion Technology,Mohali",
        "MS University of Baroda-Faculty of Fine Arts,Baroda",
        "Faculty of Visual Arts- Banaras Hindu University,Banaras",
        "Faculty of Fine Arts- Jamia Millia Islamia University,New Delhi",
        "Institute of Fine Arts- Viswa Bharti,Kolkata",
        "College of Art- University of Delhi,New Delhi",
        "Banasthali Vidyapeeth,Jaipur",
        "Faculty of Fine Arts- Rabindra Bharti University,Kolkata",
        "College of Fine Arts,Pune",
        "Faculty of Arts-Jadavpur University,Kolkata",
        "Symbiosis Institute of Media & Communication, Pune",
        "Ramnarain Ruia College,Mumbai",
        "Indraprastha College for Women,New Delhi",
        "Manipal Institute of Communications,Manipal",
        "Kamla Nehru College for Women,New Delhi",
        "SIES College of Arts, Science and Commerce,Mumbai",
        "KC College of Arts, Science and Commerce,Mumbai",
        "St Andrew's College of Arts, Science and Commerce,Mumbai",
        "Delhi College of Arts and Commerce,New Delhi",
        "Indian Institute of Mass Communication (IIMC),New Delhi",
        "Mudra Institute of Communications (MICA),Ahmedabad",
        "Xaviers Institute of Communication,Mumbai",
        "School of Planning and Architecture,New Delhi",
        "School of Planning and Architecture,Bhopal",
        "School of Planning and Architecture,Vijaywada",
        "Narsee Monjee Institute of Management Studies (NMIMS),Mumbai",
        "Rizvi College of Architecture,Mumbai",
        "Faculty of Engineering, Jadavpur University,Kolkata",
        "Sir JJ College of Architecture,Mumbai",
        "National Law School of India University,Bengaluru",
        "Campus Law Centre, Delhi University,New Delhi",
        "National Academy of Legal Studies and Research University,Hyderabad",
        "Symbiosis Society's Law College,Pune",
        "National Law Institute University,Bhopal",
        "National Law University,Jodhpur",
        "The WB National University of Juridical Sciences,Kolkata",
        "Faculty of Law, Aligarh Muslim University,Aligarh",
        "Gujrat National Law University,Gandhinagar",
        "ILS Law College,Pune",
        "Government Law College,Mumbai",
        "Amity Law School,Noida",
        "Faculty of Law, Banaras Hindu University,Banaras",
        "Faculty of Law, Jamia Millia Islamia,New Delhi",
        "Christ College of Law, Christ University,Bengaluru",
        "Faculty of Law, University of Kolkata,Kolkata",
        "National University of Advanced Legal Studies,Kochi",
        "Rajiv Gandhi National University of Law,Patiala",
        "Faculty of Law, University of Allahabad,Allahabad",
        "Loyola College,Chennai",
        "Lady Shri Ram College for Women,New Delhi",
        "St. Stephen’s College,New Delhi",
        "St. Xavier’s College,Mumbai",
        "St. Xavier’s College,Kolkata",
        "Christ College, Christ University,Bengaluru",
        "Presidency College,Kolkata",
        "Madras Christian College,Chennai",
        "Stella Maris College,Chennai",
        "Fergusson College,Pune",
        "Miranda House,New Delhi",
        "Presidency College,Chennai ",
        "St. Xavier’s College,Ahmedabad",
        "Hindu College,New Delhi",
        "Women’s Christian College,Chennai",
        "St. Joseph’s College,Bangalore",
        "Symbiosis Society’s College of Arts and Commerce,Pune",
        "Mount Carmel College,Bengaluru",
        "Jesus & Mary College,New Delhi",
        "Hansraj College,New Delhi",
        "Sacred Heart College,Kochi",
        "Indraprastha College for Women,New Delhi",
        "Loyola Academy Degree & PG College,Hyderabad",
        "Kamala Nehru College for Women,New Delhi",
        "Ramjas College,New Delhi",
        "Sri Venkateswara College,New Delhi",
        "Jyoti Nivas College,Bengaluru",
        "Elphinstone College,Mumbai",
        "Sophia College for women,Mumbai",
        "Nizam’s College,Hyderabad",
        "Somaiya Vidya Vihar,Mumbai",
        "Ethiraj College for Women,Chennai",
        "Mithibai College of  Arts,Mumbai",
        "Maulana Azad College,Kolkata",
        "Government College for Girls,Chandigarh",
        "Queen Mary’s College,Chennai",
        "Scottish Church College,Kolkata",
        "Jai Hind College,Mumbai",
        "University College for Women,Hyderabad",
        "Lady Brabourne College,Kolkata",
        "H.K. Arts College,Ahmedabad",
        "C.U. Shah Arts College,Ahmedabad",
        "Vivekananda College,Chennai",
        "St. Ann’s Degree College for Women,Hyderabad",
        "Bhavan’s College,Mumbai",
        "Shri Ram College of Commerce,New Delhi",
        "R A Podar College of Commerce and Economics,Mumbai",
        "KPK Hinduja College of Commerce and Economics,Mumbai",
        "National Degree College,Lucknow",
        "SrI Guru Gobind Singh College of Commerce,New Delhi",
        "Maharani Laxmi Ammanni (MLA) College For Women,Bengaluru",
        "MCM D.A.V College for Women,Chandigarh",
        "Narsee Monjee School of Commerce and Economics,Mumbai",
        "Indian Institute of Management, (IIM),Ahmedabad",
        "Indian Institute of Management, (IIM),Kolkata",
        "Faculty of Management Studies (FMS),New Delhi",
        "Xaviers Labour Research Insitute(XLRI),Jamshedpur",
        "Indian Institute of Management, (IIM),Bengaluru",
        "Indian Institute of Management, (IIM),Indore",
        "Narsee Monjee Institute of Management Studies,Mumbai",
        "Management Development Institute(MDI),Gurgaon",
        "Indian Institute of Management (IIM),Kozhikode",
        "S P Jain Institute of management and research,Mumbai",
        "Jamnalal Bajaj Institute of Management Studies,Mumbai",
        "Depertment of Management Studies, IIT Roorkee,Roorkee",
        "Institute of Mangement Technology (IMT),Ghaziabad",
        "Symbiosis Institute of Business Management (SIBM),Pune",
        "National Institute of Industrial Engineering (NITIE),Mumbai",
        "ICFAI Business School,Hyderabad",
        "Xavier Institute of Mangement-Bubhaneshwar(XIM-B),Bubhaneshwar",
        "Shailesh J mehta school of Mangement, IIT Bombay,Mumbai",
        "Depertment of Management Studies, IIT Delhi,New Delhi",
        "Symbiosis Centre for Mgmt. and Human Resource Development (SCMHRD),Pune",
        "Prin. L. N. Welingkar Institute of Mgmt. Dev. & Research,Mumbai",
        "Institute of Rural Management Ahmedabad(IRMA),Ahmedabad",
        "Indian Institute of Foreign Trade (IIFT),New Delhi",
        "Symbiosis Institute of International Business (SIIB),Pune",
        "Institute of Technology and Management(ITM) Business School,Kharghar",
        "Indian School of Business (ISB),Hyderabad",
        "Indian Institute of Technology (IIT),Kanpur",
        "Indian Institute of Technology (IIT),Roorkee",
        "Indian Institute of Technology (IIT),New Delhi",
        "Indian Institute of Technology (IIT),Kharagpur",
        "Indian Institute of Technology (IIT),Chennai",
        "Indian Institute of Technology (IIT),Mumbai",
        "Indian Institute of Technology (IIT),Guwahati",
        "Birla Institute of Technology and Sciences (BITS),Pilani",
        "Institute of Technology, Banaras Hindu University,Banaras",
        "National Institute of Technology (NIT),Surathkal",
        "National Institute of Technology (NIT),Tiruchirappalli",
        "Delhi Technical University (DTU),New Delhi",
        "Vellore Institute of Technology (VIT),Vellore",
        "Indian Institute of Information Technology (IIIT),Hyderabad",
        "Indian Institute of Information Technology (IIIT),Allahabad",
        "National Institute of Technology (NIT),Warangal",
        "National Institute of Technology (NIT),Calicut",
        "National Institute of Technology (SVNIT),Surat ",
        "Birla Institute of Technology and Sciences,Ranchi",
        "Institute of Hotel Management (IIHM),Mumbai",
        "Institute of Hotel Management (IIHM),New Delhi",
        "Institute of Hotel Management (IIHM),Aurangabad",
        "Institute of Hotel Management (IIHM),Bengaluru",
        "Institute of Hotel Management (IIHM),Chennai",
        "Institute of Hotel Management (IIHM),Kolkata",
        "Institute of Hotel Management (IIHM),Ahmedabad",
        "All India Institute of Medical Sciences(AIIMS),New Delhi",
        "Christian Medical College (CMC),Vellore",
        "JIPMER,Puducherry",
        "Armed Forces Medical College (AFMC),Pune",
        "Maulana Azad Medical College,New Delhi",
        "Grant Medical College,Mumbai",
        "Madras Medical College,Chennai",
        "University College of Medical Science and Research Centre,New Delhi",
        "St John's Medical College,Bengaluru",
        "Institute of Medical Science, Banarus Hindu Universtiy,Banaras",
        "King George Medical College-University (KGMC),Lucknow",
        "Christian Medical College (CMC),Ludhiana",
        "B.J. Medical College and Sassoon Hospital,Pune",
        "Kasturba Medical College, Manipal University,Manipal",
        "Amrita Institute of Medical Science and Research Centre,Kochi",
        "Bangalore Medical College and Research Institute,Bengaluru",
        "Kolkata Medical College and Hospital,Kolkata",
        "Sri Ramachandra Medical College and Research Institute,Chennai",
        "Institute of Post Graduate Medical Education and Research,Kolkata",
        "SMS Medical College,Jaipur",
        "Osmania Medical College,Hyderabad",
        "Government Medical College and Hospital,Chandigarh",
        "R.G.Kar Medical College & Hospital,Kolkata",
        "Gandhi Medical College,Hyderabad",
        "TN Medical College,Mumbai",
        "Lady Hardinge Medical College,New Delhi",
        "Shreemati Nathibai Damodar Thackersey Women's University,Mumbai",
        "Postgraduate Institute of Medical Education and Research ,Chandigarh",
        "Dr D.Y.Patil Vidyapeeth,Navi Mumbai",
        "MGM University of Health Sciences,Navi Mumbai",
        "Bharti Vidyapeeth,Pune",
        "Indian Institute of Space Science and Technology (IIST),Thiruvananthapuram",
        "Indian Institute of Science (IISc),Bengaluru",
        "Indian Institute of Management, (IIM),Lucknow",
        "Sydenham college of commerce and economics,Mumbai",
        "Manipal Institute of Technology,Manipal",
        "Faculty of Architecture,Manipal",
        "Manipal College of Dental Sciences (MCODS),Manipal",
        "Motilal Nehru National Institute of Technology(MNNIT), Allahabad",
        "Gargi college,New Delhi",
        "Kirori Mal College (KMC),New Delhi",
        "Maitreyi college,New Delhi",
        "Indian School of Business (ISB),Mohali",
        "Jawaharlal Nehru University, (JNU), Delhi,New Delhi",
        "Delhi School of Economics,New Delhi",
        "National Institute of Fashion Technology (NIFT),Shillong",
    ];
}
