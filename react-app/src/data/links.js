// Delaware County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-28
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Nothing here was guessed from a naming pattern.
//
// THE HAZARD HERE IS NOT TYPOS, IT IS THE NAME "DELAWARE"
//
// This county shares its name with a US state and with three other counties —
// Pennsylvania, New York and Indiana. Search results are dominated by all four,
// and the plausible-looking domain is usually the wrong one:
//
//   delawarecounty.org  -> Delaware County BUSINESS ALLIANCE, Delhi, NEW YORK
//   delcochamber.org    -> Delaware County Chamber, Springfield, PENNSYLVANIA
//   delcofoundation.org -> The Foundation for Delaware County, PENNSYLVANIA
//   dhss.delaware.gov   -> the State of Delaware
//   delcopa.gov         -> Delaware County, Pennsylvania
//
// The real Ohio equivalents are delawareareachamber.com, delawarecf.org and
// co.delaware.oh.us. Anyone extending this file should assume a promising
// domain is out of state until a fetch proves otherwise.
//
// OUTRIGHT TRAPS — do not add any of these, ever:
//
//   * delawareohionews.com presents itself as "The Voice of Delaware, Ohio"
//     with local-looking headlines. Its own footer states that everything on
//     the site is made up. It is satire, published by Subvertical Limited, and
//     it is the single best argument in this file for reading a page rather
//     than trusting a domain.
//   * The Auditor is auditor.co.delaware.oh.us and its GIS is
//     auditor.delco-gis.org. Search also surfaces countyauditor.org,
//     cuyahogacountyauditor.us, ohioauditors.org and countyauditors.org — none
//     are the county. So is kaitsaforauditor.us, which is a political campaign
//     site, not the office.
//   * transcriptmag.com, the Ohio Wesleyan student paper's own announced
//     successor domain, has lapsed and is parked for sale on HugeDomains.
//
// THINGS THAT ARE OUT OF DATE EVERYWHERE ELSE:
//
//   * SUNBURY IS A CITY, not a village — it advanced in 2021. The old
//     sunburyvillage.com still appears in search; the current site is
//     sunburyohio.org.
//   * The Delaware County PORT Authority was renamed the Delaware County
//     FINANCE Authority.
//   * Delaware County Transit was DATA Bus until 2019; ridedata.com is stale.
//   * Buckeye Valley's buckeyevalley.k12.oh.us address, which the county's own
//     site still publishes, redirects to mybvls.org.
//   * There is no standalone Delaware County ESC. The Delaware-Union ESC was
//     absorbed into the Educational Service Center of Central Ohio, which is
//     headquartered in Columbus rather than in this county.
//   * The Sunbury News printed its final edition and folded into the Delaware
//     Gazette. ThisWeek Community News was shut down by Gannett in January
//     2023. Neither has a live Delaware edition.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * Westerville, Dublin and Columbus are all centered in Franklin County and
//     extend north into Delaware County. All three are included and flagged.
//     Columbus CITY SCHOOLS is deliberately NOT included — unlike Westerville
//     and Dublin, the district never asserts Delaware County territory, and an
//     unsupported claim is worse than an omission.
//   * Washington Township is administered from Dublin and is the only township
//     in Ohio spanning three counties (Delaware, Franklin, Union). The county's
//     own list counts 19 townships by including it; there are 18 wholly inside.
//   * Brown, Oxford and Thompson Townships have no independent websites and are
//     listed at their pages on the county portal. Marlboro Township has none at
//     all — neither the county's list nor the Township Association shows one.
//   * Powell and Ostrander have no independent libraries; both are branches of
//     the Delaware County District Library. Only Sunbury's Community Library
//     and Ashley's Wornstaff Memorial are independent.
//   * The Columbus Zoo and Zoombezi Bay are in Powell, inside this county.
//
// LEFT OUT rather than listed unverified: Highbanks Metro Park (redirect loop),
// HelpLine of Delaware & Morrow (JavaScript interstitial), Recovery &
// Prevention Resources (no site found; the Chamber lists it as no longer
// available), and the OWU Transcript (self-labelled as an archive, newest post
// 2021).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Delaware County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Delaware County, Ohio", category: "Government", subcategory: "County", url: "https://co.delaware.oh.us/", description: "Main county portal, headquartered at the Historic Courthouse, 91 North Sandusky Street in Delaware." },
  { name: "Delaware County Board of Commissioners", category: "Government", subcategory: "County", url: "https://co.delaware.oh.us/commissioners/", description: "Three-member board meeting Mondays and Thursdays at 9:30 a.m. at 91 N. Sandusky St. in Delaware." },
  { name: "Delaware County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.co.delaware.oh.us/", description: "Office of Auditor George Kaitsa, chief fiscal officer of the county, at 145 N. Union St. in Delaware." },
  { name: "Delaware County Auditor GIS", category: "Government", subcategory: "GIS", url: "https://auditor.delco-gis.org/", description: "The Auditor's parcel lookup and property mapping system — the service this project's parcel data is built from." },
  { name: "Delaware County Board of Elections", category: "Government", subcategory: "Elections", url: "https://vote.delawarecountyohio.gov/", description: "County elections office at 2079 US Highway 23 N, Suite 4 in Delaware." },
  { name: "Delaware County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://sheriff.co.delaware.oh.us/", description: "Office of Sheriff Jeffrey C. Balzer, with offices and jail at 1776 State Route 521 in Delaware." },
  { name: "Delaware County Emergency Management Agency", category: "Government", subcategory: "Public Safety", url: "https://ema.co.delaware.oh.us/", description: "Office of Homeland Security and Emergency Management at 10 Court Street in Delaware." },
  { name: "Delaware County Emergency Communications", category: "Government", subcategory: "Public Safety", url: "https://emergencycomms.co.delaware.oh.us/", description: "CALEA-accredited 9-1-1 center at 10 Court Street, dispatching 13 fire departments, county EMS and the Delaware and Powell police." },
  { name: "Delaware County Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://commonpleas.co.delaware.oh.us/commonpleas/", description: "General division trial court at 117 North Union Street, Level 500 in Delaware." },
  { name: "Delaware County Domestic Relations Court", category: "Government", subcategory: "Courts", url: "https://domestic.co.delaware.oh.us/", description: "Domestic relations division at 117 N. Union St., 400 Level in Delaware." },
  { name: "Delaware County Probate Court", category: "Government", subcategory: "Courts", url: "https://probate.co.delaware.oh.us/", description: "Probate division at 145 N. Union Street, 3rd Floor, handling estates, guardianships and marriage licenses." },
  { name: "Delaware County Juvenile Court", category: "Government", subcategory: "Courts", url: "https://juvenile.co.delaware.oh.us/", description: "Juvenile division at 145 N. Union Street, sharing a judge with Probate but keeping a separate site." },
  { name: "Delaware County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://clerkofcourts.co.delaware.oh.us/", description: "Legal Division at 117 North Union Street, Level 300, plus title offices in Delaware and Lewis Center." },
  { name: "Delaware Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.delawareohio.net/government/departments/municipal-court", description: "Municipal court at 70 North Union Street, with specialized mental health, veterans and OVI dockets; it sits on the city's site, not a county subdomain." },
  { name: "Delaware County Law Library", category: "Government", subcategory: "Courts", url: "https://lawlibrary.co.delaware.oh.us/", description: "Public law library in the Carnegie Building at 101 North Sandusky Street in Delaware." },
  { name: "Delaware County Engineer", category: "Government", subcategory: "County", url: "https://engineer.co.delaware.oh.us/", description: "County roads and bridges, in the Byxbe Building at 1610 State Route 521 in Delaware." },
  { name: "Delaware County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://treasurer.co.delaware.oh.us/", description: "Real estate tax collection and tax lien sales, at 145 North Union Street in Delaware." },
  { name: "Delaware County Recorder", category: "Government", subcategory: "Recorder", url: "https://recorder.co.delaware.oh.us/", description: "Real estate and military discharge records, at 145 N. Union St. in Delaware." },
  { name: "Delaware County Prosecuting Attorney", category: "Government", subcategory: "County", url: "https://prosecutor.co.delaware.oh.us/", description: "Prosecutor's office in the Rutherford B. Hayes Building, 145 North Union St., 3rd Floor." },
  { name: "Delaware County Coroner", category: "Government", subcategory: "County", url: "https://coroner.co.delaware.oh.us/", description: "Office at 10 Court Street in Delaware, determining cause and manner of death under ORC Chapter 313." },
  { name: "Delaware County Job and Family Services", category: "Government", subcategory: "County", url: "https://jfs.co.delaware.oh.us/", description: "Agency at 145 North Union Street administering SNAP, child care, and child and adult protective services." },
  { name: "Delaware County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://dcbdd.org/", description: "DCBDD at 149 North Sandusky Street, providing early intervention and service and support administration." },
  { name: "Delaware County Regional Sewer District", category: "Government", subcategory: "Public Works", url: "https://regionalsewer.co.delaware.oh.us/", description: "Sewer utility at 1610 State Route 521, operating the Alum Creek and Olentangy reclamation facilities." },
  { name: "Delaware County Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://regionalplanning.co.delaware.oh.us/", description: "Planning office at 1610 State Route 521, handling subdivision regulations, lot splits and over 100 county GIS layers." },
  { name: "Delaware County Building Safety", category: "Government", subcategory: "County", url: "https://buildingsafety.co.delaware.oh.us/", description: "Permits and inspections at 1610 State Route 521, with an online eTRAKiT permit portal." },
  { name: "Delaware County Transit", category: "Government", subcategory: "Transit", url: "https://www.delcotransit.com/", description: "County transit agency at 119 Henderson Ct. in Delaware, formerly DATA Bus, running FLEX routes and countywide demand response." },
  { name: "City of Delaware", category: "Government", subcategory: "City", url: "https://www.delawareohio.net/", description: "County seat city government on South Sandusky St., operating under a city manager and council." },
  { name: "City of Powell", category: "Government", subcategory: "City", url: "https://cityofpowell.us/", description: "City hall at 47 Hall Street in Powell." },
  { name: "City of Sunbury", category: "Government", subcategory: "City", url: "https://sunburyohio.org/", description: "Advanced from village to city status in 2021, with the 1868 Town Hall anchoring its New England-style square." },
  { name: "City of Westerville", category: "Government", subcategory: "City", url: "https://www.westerville.org/", description: "City hall at 21 S. State St.; the city is centered in Franklin County and extends north into Delaware County." },
  { name: "City of Dublin", category: "Government", subcategory: "City", url: "https://dublinohiousa.gov/", description: "Council chambers at 5555 Perimeter Drive; the city is centered in Franklin County and extends into Delaware and Union counties." },
  { name: "City of Columbus", category: "Government", subcategory: "City", url: "https://www.columbus.gov/", description: "City hall at 90 West Broad Street; Columbus's far north side extends into Delaware County." },
  { name: "Village of Galena", category: "Government", subcategory: "Village", url: "https://galenaohio.gov/", description: "Village hall at 109 Harrison Street in Galena." },
  { name: "Village of Ashley", category: "Government", subcategory: "Village", url: "https://www.villageofashley.org/", description: "Village offices at 3 N. Harrison Street in Ashley." },
  { name: "Village of Ostrander", category: "Government", subcategory: "Village", url: "https://ostranderohio.us/", description: "Village hall at 19 S. Main Street, under a mayor-council government." },
  { name: "Village of Shawnee Hills", category: "Government", subcategory: "Village", url: "https://shawneehillsoh.org/", description: "Municipal building at 9484 Dublin Road, with council meeting the 2nd and 4th Mondays." },
  { name: "Berkshire Township", category: "Government", subcategory: "Township", url: "https://www.berkshiretwp.org/", description: "Township offices at 1454 Rome Corners Road in Galena; founded 1806." },
  { name: "Berlin Township", category: "Government", subcategory: "Township", url: "https://www.berlintwp.us/", description: "Township hall at 3271 Cheshire Rd. in Delaware." },
  { name: "Brown Township", category: "Government", subcategory: "Township", url: "https://co.delaware.oh.us/cities/brown-township/", description: "Township hall at 5555 State Route 521; Brown has no independent site and is hosted on the county portal." },
  { name: "Concord Township", category: "Government", subcategory: "Township", url: "https://www.concordtwp.org/", description: "Township hall at 6385 Home Road in Delaware." },
  { name: "Delaware Township", category: "Government", subcategory: "Township", url: "https://www.delawaretownshipohio.org/", description: "Township offices at 2590 Liberty Road; founded 1808, with over 12 miles of roads around the City of Delaware." },
  { name: "Genoa Township", category: "Government", subcategory: "Township", url: "https://www.genoatwp.com/", description: "Township hall at 5111 South Old 3C Hwy in Westerville." },
  { name: "Harlem Township", category: "Government", subcategory: "Township", url: "https://www.harlemtwp.com/", description: "Township hall at 3883 S State Route 605 in Galena; founded 1810 when split from Sunbury Township." },
  { name: "Kingston Township", category: "Government", subcategory: "Township", url: "https://kingstontwp.org/", description: "Township offices at 4063 Carter's Corner Road in Sunbury, in the northeast corner at the Morrow County line." },
  { name: "Liberty Township", category: "Government", subcategory: "Township", url: "https://www.libertytwp.org/", description: "Township hall at 10104 Brewster Lane in Powell." },
  { name: "Orange Township", category: "Government", subcategory: "Township", url: "https://orangetwp.org/", description: "Township hall at 1680 E Orange Road in Lewis Center." },
  { name: "Oxford Township", category: "Government", subcategory: "Township", url: "https://co.delaware.oh.us/cities/oxford-township/", description: "Township hall at 5125 Shoemaker Road in Ashley; no independent site, hosted on the county portal." },
  { name: "Porter Township", category: "Government", subcategory: "Township", url: "https://www.portertwp.org/", description: "Township hall at 12828 McKay St. in Sunbury, covering about 25.8 square miles." },
  { name: "Radnor Township", category: "Government", subcategory: "Township", url: "https://www.radnortwp.org/", description: "Township hall at 4061 State Route 203 in Radnor; settled by Welsh settlers before 1800." },
  { name: "Scioto Township", category: "Government", subcategory: "Township", url: "https://sciototownshipohio.com/", description: "Official township site with trustee and contact sections; its interior pages block automated retrieval." },
  { name: "Thompson Township", category: "Government", subcategory: "Township", url: "https://co.delaware.oh.us/cities/thompson-township/", description: "Township offices at 4373 State Route 257 North in Radnor; no independent site, hosted on the county portal." },
  { name: "Trenton Township", category: "Government", subcategory: "Township", url: "https://www.trentontwp.com/", description: "Three-member board of trustees meeting at 15495 Hartford Road in Sunbury." },
  { name: "Troy Township", category: "Government", subcategory: "Township", url: "https://troytwpdelawareoh.gov/", description: "Township hall at 4293 US Highway 23 N in Delaware, with trustees meeting the 3rd Monday." },
  { name: "Washington Township", category: "Government", subcategory: "Township", url: "https://wtwpdublinoh.gov/", description: "Township at 6200 Eiterman Rd. in Dublin serving parts of Delaware, Franklin and Union counties — the only Ohio township spanning three." },
  // ---------- Education ----------
  { name: "Ohio Wesleyan University", category: "Education", subcategory: "University", url: "https://www.owu.edu/", description: "Private liberal arts university at 61 S. Sandusky St. in Delaware, on a 200-acre campus with over 70 majors." },
  { name: "Columbus State Community College — Delaware Campus", category: "Education", subcategory: "College", url: "https://www.cscc.edu/about/locations/delaware-campus/", description: "Branch campus at 5100 Cornerstone Dr. in Delaware, offering transfer pathways and career certificates." },
  { name: "Delaware Area Career Center", category: "Education", subcategory: "Career Center", url: "https://www.delawareareacc.org/", description: "Career-technical school at 4565 Columbus Pike in Delaware, serving high school and adult students." },
  { name: "Educational Service Center of Central Ohio", category: "Education", subcategory: "ESC", url: "https://www.escco.org/", description: "Regional service center covering Delaware County; the former Delaware-Union ESC was absorbed into it, and it is based in Columbus." },
  { name: "Delaware City Schools", category: "Education", subcategory: "K-12", url: "https://www.dcs.k12.oh.us/", description: "District office at 74 W. William St., serving about 5,700 students across five elementaries, Dempsey Middle and Hayes High." },
  { name: "Olentangy Local School District", category: "Education", subcategory: "K-12", url: "https://www.olentangy.k12.oh.us/", description: "District office at 7840 Graphics Way in Lewis Center; the county's largest district and among Ohio's fastest growing." },
  { name: "Big Walnut Local Schools", category: "Education", subcategory: "K-12", url: "https://www.bwls.net/", description: "District office at 110 Tippett Ct. in Sunbury, serving roughly 4,500 students across eight schools." },
  { name: "Buckeye Valley Local Schools", category: "Education", subcategory: "K-12", url: "https://www.mybvls.org/", description: "District office at 679 Coover Road in Delaware, with East and West elementaries, a middle school and a high school." },
  { name: "Westerville City School District", category: "Education", subcategory: "K-12", url: "https://www.westerville.k12.oh.us/", description: "District offices at 936 Eastwind Drive; its 37-square-mile area spans northeastern Franklin and southern Delaware counties." },
  { name: "Dublin City Schools", category: "Education", subcategory: "K-12", url: "https://www.dublinschools.net/", description: "District offices at 5175 Emerald Parkway; boundaries span 47 square miles across Franklin, Delaware and Union counties." },
  { name: "Delaware County District Library", category: "Education", subcategory: "Library", url: "https://www.delawarelibrary.org/", description: "County library at 84 E. Winter St. in Delaware, with Delaware Main, Liberty, Orange, Ostrander and Powell branches." },
  { name: "Community Library", category: "Education", subcategory: "Library", url: "https://www.yourcl.org/", description: "Independent library at 44 Burrer Dr. in Sunbury, founded 1944, serving the Big Walnut school district's six townships and two municipalities." },
  { name: "Wornstaff Memorial Public Library", category: "Education", subcategory: "Library", url: "https://www.wornstafflibrary.com/", description: "Independent village library at 302 E. High Street in Ashley." },
  // ---------- Health ----------
  { name: "Delaware Public Health District", category: "Health", subcategory: "Public Health", url: "https://www.delawarehealth.org/", description: "County health department at 470 South Sandusky Street, providing immunizations, WIC, food safety and septic permitting." },
  { name: "OhioHealth Grady Memorial Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/grady-memorial-hospital", description: "Full-service hospital at 561 W. Central Ave. in Delaware, serving the community for over a century." },
  { name: "Mount Carmel Lewis Center", category: "Health", subcategory: "Hospital", url: "https://www.mountcarmelhealth.com/location/mount-carmel-lewis-center-emergency-room", description: "Freestanding 24/7 emergency department at 7100 Graphics Way in Lewis Center, with air and ground transport." },
  { name: "Nationwide Children's Lewis Center", category: "Health", subcategory: "Clinic", url: "https://www.nationwidechildrens.org/locations/close-to-home-locations/lewis-center", description: "Pediatric Close To Home center with a 24/7 emergency department, offering cardiology, audiology, radiology and therapy." },
  { name: "OhioHealth Lewis Center Health Center", category: "Health", subcategory: "Clinic", url: "https://www.ohiohealth.com/locations/health-center/lewis-center-health-center", description: "Ambulance-receiving emergency department with imaging and rehab, on the campus shared with Nationwide Children's." },
  { name: "OSU Wexner Outpatient Care Lewis Center", category: "Health", subcategory: "Clinic", url: "https://wexnermedical.osu.edu/locations/outpatient-care-lewis-center", description: "Multispecialty outpatient facility at 6515 Pullman Drive in Lewis Center, near U.S. Route 23." },
  { name: "OhioHealth Westerville Medical Campus", category: "Health", subcategory: "Clinic", url: "https://www.ohiohealth.com/locations/medical-campus/westerville-medical-campus", description: "Polaris-area campus with 24/7 emergency care, imaging, therapy and outpatient surgery." },
  { name: "Grace Clinic Delaware", category: "Health", subcategory: "Clinic", url: "https://graceclinicsoh.org/", description: "Free faith-based clinic for uninsured and underinsured patients at 40 South Franklin Street in Delaware." },
  { name: "Delaware-Morrow Mental Health & Recovery Services Board", category: "Health", subcategory: "Mental Health", url: "https://dmmhrsb.org/", description: "ADAMH board at 40 N. Sandusky Street, Suite 301, funding public mental health and addiction services for Delaware and Morrow counties." },
  { name: "Ohio's Hospice of Central Ohio", category: "Health", subcategory: "Hospice", url: "https://www.ohioshospice.org/locations/", description: "Nonprofit hospice whose stated service area includes Delaware County, administered from Newark." },
  // ---------- Business & Economy ----------
  { name: "Delaware Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.delawareareachamber.com/", description: "Chamber founded in 1907 with more than 470 members, at 2 Troy Road in Delaware." },
  { name: "Greater Powell Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.powellchamber.com/", description: "Powell-area chamber running the Powell Farmers Market and Taste of Powell; most interior pages are robots-disallowed." },
  { name: "Sunbury/Big Walnut Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.sunburybigwalnutchamber.com/", description: "Chamber at 39 E. Granville Street in Sunbury." },
  { name: "Westerville Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.westervillechamber.com/", description: "Chamber at 99 Commerce Park Dr., in the ZIP code covering the Delaware County portion of Westerville." },
  { name: "Main Street Delaware", category: "Business & Economy", subcategory: "Downtown Development", url: "https://www.mainstreetdelaware.com/", description: "Downtown revitalization nonprofit at 20 E. William St., which runs the farmers market and First Friday." },
  { name: "Delaware County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://economicdevelopment.co.delaware.oh.us/", description: "County office at 91 North Sandusky Street providing site selection and business retention assistance." },
  { name: "Delaware County Finance Authority", category: "Business & Economy", subcategory: "Finance Authority", url: "https://dcfa.co.delaware.oh.us/about/", description: "Established in 2006 as the Delaware County Port Authority and since renamed; governed by a five-member board." },
  { name: "OhioMeansJobs Delaware County", category: "Business & Economy", subcategory: "Workforce", url: "https://delcoomj.co.delaware.oh.us/", description: "Workforce center at 145 North Union Street offering job search help, employer recruiting and veteran priority services." },
  // ---------- Community & Social ----------
  { name: "United Way of Delaware County", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.liveuniteddelawarecounty.org/", description: "County United Way, mailing to P.O. Box 319 in Delaware and housed at its Strengthening Families location." },
  { name: "Delaware County Foundation", category: "Community & Social", subcategory: "Community Foundation", url: "https://delawarecf.org/", description: "Community foundation established in 1995, at 110 Riverbend Avenue, Suite 101 in Powell." },
  { name: "SourcePoint", category: "Community & Social", subcategory: "Seniors", url: "https://mysourcepoint.org/", description: "Senior services agency at 800 Cheshire Road serving adults 55 and older with in-home care, nutrition and an enrichment center." },
  { name: "Delaware County Veterans Services", category: "Community & Social", subcategory: "Veterans", url: "https://veteransservice.co.delaware.oh.us/", description: "Veterans Service Commission at 91 North Sandusky St., providing claims assistance, financial and dental aid, and transportation." },
  { name: "Family Promise of Delaware", category: "Community & Social", subcategory: "Housing", url: "https://www.familypromise-delawareohio.org/", description: "Operates a 24-hour emergency shelter and rapid rehousing referral centre for homeless families in Delaware." },
  { name: "Common Ground Free Store Ministries", category: "Community & Social", subcategory: "Basic Needs", url: "https://commongroundfreestore.org/", description: "Free store at 193 E Central Ave. in Delaware, which served 1,199 families and distributed over 176,000 items in 2025." },
  { name: "People In Need of Delaware County", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.delawarepeopleinneed.org/", description: "Agency at 138 Johnson Drive running a food pantry since 1981 and the Holiday Clearing House since 1954." },
  { name: "Andrews House", category: "Community & Social", subcategory: "Community Center", url: "https://www.andrewshouse.org/", description: "Community center at 39 W Winter St. offering free community dinners, legal advice clinics, a mobile market and tax preparation." },
  { name: "Habitat for Humanity of Delaware & Union Counties", category: "Community & Social", subcategory: "Housing", url: "https://www.habitatdelawareunion.org/", description: "Affordable housing affiliate at 305 Curtis St. in Delaware, prioritising critical home repair for county seniors." },
  { name: "Delaware Community Center YMCA", category: "Community & Social", subcategory: "YMCA", url: "https://ymcacolumbus.org/locations/delaware", description: "YMCA of Central Ohio branch at 1121 South Houk Road, with an indoor pool, indoor track and basketball courts." },
  { name: "Liberty Township / Powell YMCA", category: "Community & Social", subcategory: "YMCA", url: "https://ymcacolumbus.org/locations", description: "YMCA of Central Ohio branch at 7798 Liberty Road N. in Powell." },
  // ---------- Recreation & Tourism ----------
  { name: "Preservation Parks of Delaware County", category: "Recreation & Tourism", subcategory: "Parks", url: "https://preservationparks.com/", description: "County park district headquartered at 2656 Hogback Rd. in Sunbury, protecting the county's natural and historical features." },
  { name: "Delaware State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/delaware-state-park", description: "ODNR park with a 1,300-acre reservoir, a 214-site electric campground and an 800-foot public beach." },
  { name: "Alum Creek State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/alum-creek-state-park", description: "ODNR park with 3,387 acres of water, a 240-slip marina and a 3,000-foot beach billed as Ohio's largest inland state park beach." },
  { name: "Delaware County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.delawarecountyfair.com/", description: "Run by the Delaware County Agricultural Society at 236 Pennsylvania Avenue in Delaware." },
  { name: "Little Brown Jug", category: "Recreation & Tourism", subcategory: "Harness Racing", url: "https://www.littlebrownjug.com/", description: "Harness race for three-year-old pacers at the county fairgrounds, 236 Pennsylvania Ave. in Delaware." },
  { name: "Columbus Zoo and Aquarium", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.columbuszoo.org/", description: "Zoo at 4850 W Powell Rd. in Powell — despite the name, it is inside Delaware County." },
  { name: "Zoombezi Bay", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.zoombezibay.com/", description: "Water park at 4850 W Powell Rd., adjacent to and operated with the Columbus Zoo." },
  { name: "Olentangy Caverns", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.olentangycaverns.com/", description: "Show cave and activity park at 1779 Home Road in Delaware, open daily from March to November." },
  { name: "Delaware County Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.delawareohiohistory.org/", description: "Founded 1947 at 2690 Stratford Road, operating the Meeker Homestead Museum, the Nash House Museum and the Cryder Research Library." },
  { name: "Perkins Observatory", category: "Recreation & Tourism", subcategory: "Science", url: "https://www.owu.edu/about/offices-services-directory/perkins-observatory/", description: "Ohio Wesleyan observatory at 3199 Columbus Pike, running public programmes with weather-permitting telescope observing." },
  { name: "Destination Delaware County Ohio", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.visitdelohio.com/", description: "The county visitors bureau, promoting 140 miles of shoreline and over 250 restaurants and bars." },
  // ---------- News & Media ----------
  { name: "The Delaware Gazette", category: "News & Media", subcategory: "Newspaper", url: "https://www.delgazette.com/", description: "The county's daily newspaper; Sunbury and Big Walnut coverage folded into it when the Sunbury News closed." },
  { name: "1808Delaware", category: "News & Media", subcategory: "Online News", url: "https://1808delaware.com/", description: "Independent digital outlet covering Delaware, Powell, Lewis Center, Sunbury, and Genoa and Orange townships." },
  { name: "Delmar Media Group", category: "News & Media", subcategory: "Radio", url: "https://delmarmediagroup.com/radio/", description: "Broadcaster at 8774 Cotter Street in Lewis Center, owning WDLR and carrying the Little Brown Jug Radio Network." },
];
