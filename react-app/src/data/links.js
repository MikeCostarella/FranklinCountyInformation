// Franklin County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-29
//
// Every URL below was fetched and its content checked against the organization
// it claims to be, and against being in OHIO. Nothing was guessed from a
// naming pattern.
//
// THE NAME COLLIDES WITH ABOUT TWENTY-FIVE OTHER COUNTIES
//
// There is a Franklin County in Pennsylvania, Indiana, New York, Missouri,
// Tennessee, Virginia, Washington, North Carolina, Georgia, Kentucky, Texas,
// Illinois, Massachusetts, Vermont, Florida, Alabama, Kansas, Nebraska, Iowa,
// Maine, Idaho, Mississippi and Arkansas — and a city of Franklin in Warren
// County, Ohio. Search results are dominated by the wrong ones. Every page here
// was read for an Ohio address before it was included.
//
// The same trap runs through the townships, because Ohio reuses these names
// heavily. pleasanttownship.org is FAIRFIELD County and pleasant-township.org is
// HARDIN County; Franklin's is pleasanttownship.com in Grove City. perrytwp.com
// is STARK County. plaintownshipstarkoh.gov is Stark's Plain Township, not the
// one in New Albany. Plain Local Schools is Canton, in Stark County, and is
// excluded for that reason.
//
// OUTRIGHT TRAPS — do not add any of these, ever:
//
//   * columbusmessenger.com HAS BEEN HIJACKED. It 302-redirects off-domain to
//     arch-ware.org, a scraped Indonesian shopping-and-gambling template. It
//     looks like a local newspaper domain and is not one.
//   * topiarypark.org is now generic travel-booking filler — "Discover Your
//     Perfect Stay" — with no park content. The domain appears to have expired
//     and been re-registered. The park itself survives as Old Deaf School Park
//     under Columbus Recreation and Parks.
//
// THINGS THAT ARE STALE EVERYWHERE ELSE, INCLUDING ON THE COUNTY'S OWN SITE:
//
//   * Franklin County's municipality list still publishes uaoh.net,
//     ci.reynoldsburg.oh.us, grandviewheights.org, minervapark.org, obetz.oh.us
//     and riverlea.com. All have moved, mostly to .gov. Only the current,
//     verified addresses are listed here.
//   * franklincountyauditor.com 302-redirects to auditor.franklincountyohio.gov.
//   * Capital Crossroads and Discovery Special Improvement Districts CEASED
//     OPERATIONS on 1 November 2025 after 25 years; their ambassador, cleaning
//     and outreach work moved to Safer Downtown under Downtown Columbus, Inc.
//   * The Columbus Downtown Development Corporation is now Downtown Columbus,
//     Inc. Both domains serve the same organization.
//   * Obetz is a CITY, not a village.
//   * Bexley City Schools is bexley.us; the City of Bexley is bexley.org. Easy
//     to swap by accident.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * The COLUMBUS ZOO IS NOT IN FRANKLIN COUNTY. It is at 4850 W Powell Rd in
//     Powell, Delaware County. It is included because it carries the city's
//     name and everyone looks for it here, and its description says so.
//   * Straddling municipalities: Dublin (Franklin/Delaware/Union), Westerville
//     and New Albany (Franklin/Delaware/Licking), Reynoldsburg
//     (Franklin/Licking/Fairfield), Canal Winchester (Franklin/Fairfield),
//     Pickerington (Fairfield/Franklin). Washington Township is administered
//     from Dublin and is the only Ohio township spanning three counties.
//   * Three districts serving county residents are headquartered outside it:
//     Madison-Plains (London, Madison County), Licking Heights (Licking County)
//     and Pickerington Public Library (Fairfield County).
//
// LEFT OUT rather than listed unverified: the Columbus Dispatch (HTTP 403 to
// every fetch), Scioto Downs (expired TLS certificate), the Upper Arlington
// chamber (empty document), and the cities of Worthington, Reynoldsburg and
// Canal Winchester plus Prairie, Perry, Jefferson and Pleasant Townships, all
// of which failed robots.txt or could not be confirmed as Franklin County.
// Those seven are the gap in this file and are worth a browser check.

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
export const AUDITOR_VENDOR = "Franklin County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Franklin County, Ohio", category: "Government", subcategory: "County", url: "https://www.franklincountyohio.gov/agency-directory", description: "Official county portal, whose agency directory lists 13 elected offices including Auditor, Clerk of Courts, Coroner, Engineer, Recorder, Sheriff and Treasurer." },
  { name: "Franklin County Board of Commissioners", category: "Government", subcategory: "County", url: "https://www.franklincountyohio.gov/Agency-Directory/Board-of-Commissioners", description: "Three-member board with offices at 373 S. High Street, 26th Floor in Columbus." },
  { name: "Franklin County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.franklincountyohio.gov/Home", description: "Auditor's office at 373 S. High St., 21st Floor in Columbus; franklincountyauditor.com redirects here." },
  { name: "Franklin County Auditor Property Search", category: "Government", subcategory: "Auditor", url: "https://property.franklincountyauditor.com/_web/search/commonsearch.aspx?mode=address", description: "The Tyler iasWorld parcel search behind this project's Auditor links, searchable by owner, address, parcel ID and subdivision." },
  { name: "Franklin County Auditor GIS", category: "Government", subcategory: "GIS", url: "https://auditor.franklincountyohio.gov/Auditor/Geographic-Information-Systems-GIS", description: "GIS office established in 1987, publishing the parcel service this project's map is built from." },
  { name: "Franklin County Board of Elections", category: "Government", subcategory: "Elections", url: "https://vote.franklincountyohio.gov/", description: "County elections office at 1700 Morse Rd. in Columbus." },
  { name: "Franklin County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://sheriff.franklincountyohio.gov/", description: "Sheriff's office at 373 South High St. in Columbus." },
  { name: "Franklin County Emergency Management", category: "Government", subcategory: "Public Safety", url: "https://www.franklincountyohio.gov/Agency-Directory/Emergency-Management-and-Homeland-Security", description: "All-hazards emergency management and homeland security agency at 5300 Strawberry Farms Blvd. in Columbus." },
  { name: "Franklin County Coroner", category: "Government", subcategory: "Public Safety", url: "https://www.franklincountyohio.gov/Agency-Directory/Coroner", description: "Coroner's office at the Forensic Science Center, 2090 Frank Road in Columbus." },
  { name: "Franklin County Dog Shelter", category: "Government", subcategory: "Public Safety", url: "https://www.franklincountyohio.gov/Agency-Directory/Dog-Shelter-and-Adoption-Center", description: "County dog shelter, adoption centre and animal control facility at 4340 Tamarack Blvd. in Columbus." },
  { name: "Franklin County Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://fccourts.org/", description: "General Division trial court at 345 S. High Street in Columbus." },
  { name: "Domestic Relations and Juvenile Court", category: "Government", subcategory: "Courts", url: "https://drj.fccourts.org/", description: "Domestic Relations and Juvenile Division of the Common Pleas Court, at 373 South High Street, 4th floor." },
  { name: "Franklin County Probate Court", category: "Government", subcategory: "Courts", url: "https://www.franklincountyohio.gov/Agency-Directory/Probate-Court", description: "Probate Court at 373 S. High St., 22nd Floor in Columbus." },
  { name: "Franklin County Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.franklincountymunicourt.org/", description: "Municipal court at 375 S. High St. in Columbus." },
  { name: "Franklin County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://clerk.franklincountyohio.gov/", description: "Clerk of Courts at 373 South High Street in Columbus." },
  { name: "Tenth District Court of Appeals", category: "Government", subcategory: "Courts", url: "https://www.franklincountyohio.gov/Agency-Directory/Tenth-District-Court-of-Appeals", description: "Ohio's Tenth District appellate court, at 373 S. High St., 24th Floor in Columbus." },
  { name: "Franklin County Prosecuting Attorney", category: "Government", subcategory: "Courts", url: "https://www.franklincountyohio.gov/Agency-Directory/Prosecuting-Attorney", description: "Prosecutor's office at 373 S. High St., 14th Floor in Columbus." },
  { name: "Franklin County Public Defender", category: "Government", subcategory: "Courts", url: "https://www.franklincountyohio.gov/Agency-Directory/Public-Defender", description: "Public defender's office at 373 S. High St., 12th Floor in Columbus." },
  { name: "Franklin County Law Library", category: "Government", subcategory: "Courts", url: "https://www.franklincountyohio.gov/Agency-Directory/Law-Library", description: "Public law library in the Michael J. Dorrian Building, 369 South High Street, 10th Floor." },
  { name: "Franklin County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://treasurer.franklincountyohio.gov/", description: "Treasurer's office, which collects property taxes for the county." },
  { name: "Franklin County Recorder", category: "Government", subcategory: "Recorder", url: "https://www.franklincountyohio.gov/Agency-Directory/Recorder", description: "Recorder's office at 373 S. High St., 18th floor in Columbus, keeping land and property records." },
  { name: "Franklin County Engineer", category: "Government", subcategory: "Public Works", url: "https://www.franklincountyengineer.org/maps/", description: "Engineer's office at 970 Dublin Road in Columbus, publishing the county map and individual maps for all 17 townships." },
  { name: "Franklin County Sanitary Engineering", category: "Government", subcategory: "Public Works", url: "https://www.franklincountyohio.gov/Agency-Directory/Sanitary-Engineering", description: "County water and sewer utility at 280 East Broad St., 2nd Floor in Columbus." },
  { name: "Franklin Soil and Water Conservation District", category: "Government", subcategory: "Public Works", url: "https://www.franklinswcd.org/", description: "Conservation district at 1404 Goodale Boulevard, Suite 100 in Columbus." },
  { name: "Franklin County Job and Family Services", category: "Government", subcategory: "County", url: "https://www.franklincountyohio.gov/Agency-Directory/Job-and-Family-Services", description: "Main office at 1721 Northland Park Avenue, with opportunity centres on Mount Vernon Ave. and N. Wilson Road." },
  { name: "Franklin County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://www.fcbdd.org/", description: "FCBDD administrative offices at 2879 Johnstown Road in Columbus." },
  { name: "Franklin County Veterans Service Commission", category: "Government", subcategory: "Veterans", url: "https://www.franklincountyohio.gov/Agency-Directory/Veterans-Service-Commission", description: "Located in Memorial Hall, Room 100, 280 East Broad Street in Columbus." },
  { name: "Central Ohio Transit Authority", category: "Government", subcategory: "Transit", url: "https://www.cota.com/", description: "COTA, the regional transit authority, headquartered at 33 N. High Street in Columbus and serving 1.2 million residents." },
  { name: "Mid-Ohio Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.morpc.org/", description: "MORPC, the regional planning commission, at 111 Liberty Street, Suite 100 in Columbus." },
  { name: "City of Columbus", category: "Government", subcategory: "City", url: "https://www.columbus.gov/", description: "County seat and Ohio's state capital; City Hall at 90 West Broad Street." },
  { name: "City of Bexley", category: "Government", subcategory: "City", url: "https://www.bexley.org/", description: "City offices at 2242 E. Main Street in Bexley. Note the .org — the school district is bexley.us." },
  { name: "City of Dublin", category: "Government", subcategory: "City", url: "https://www.dublinohiousa.gov/", description: "Council chambers at 5555 Perimeter Drive; the city spans Franklin, Delaware and Union counties." },
  { name: "City of Gahanna", category: "Government", subcategory: "City", url: "https://www.gahanna.gov/", description: "City offices at 200 South Hamilton in Gahanna." },
  { name: "City of Grandview Heights", category: "Government", subcategory: "City", url: "https://www.grandviewheights.gov/", description: "Municipal site for the city's police department and parks and recreation." },
  { name: "City of Grove City", category: "Government", subcategory: "City", url: "https://www.grovecityohio.gov/", description: "Municipal site covering Town Center and Fryer Park near the I-71 and Route 665 interchange." },
  { name: "City of Groveport", category: "Government", subcategory: "City", url: "https://www.groveport.org/", description: "Municipal offices and building and zoning department at 655 Blacklick Street." },
  { name: "City of Hilliard", category: "Government", subcategory: "City", url: "https://www.hilliardohio.gov/", description: "City Hall at 3800 Municipal Way in Hilliard." },
  { name: "City of New Albany", category: "Government", subcategory: "City", url: "https://www.newalbanyohio.org/", description: "Village Hall at 99 W. Main Street; the city extends into Delaware and Licking counties." },
  { name: "City of Obetz", category: "Government", subcategory: "City", url: "https://obetz.gov/directory/", description: "Government Center at 4175 Alum Creek Drive. Obetz is a city, not a village." },
  { name: "City of Upper Arlington", category: "Government", subcategory: "City", url: "https://upperarlingtonoh.gov/", description: "Municipal Services Center at 3600 Tremont Rd. The old uaoh.net address is stale." },
  { name: "City of Westerville", category: "Government", subcategory: "City", url: "https://www.westerville.org/", description: "City offices at 21 S. State St.; the city extends north into Delaware County." },
  { name: "City of Whitehall", category: "Government", subcategory: "City", url: "https://www.whitehall-oh.us/", description: "City offices at 360 S. Yearling Road in Whitehall." },
  { name: "City of Pickerington", category: "Government", subcategory: "City", url: "https://www.ci.pickerington.oh.us/", description: "City Hall at 100 Lockville Rd.; the city straddles the Fairfield and Franklin county line." },
  { name: "Village of Brice", category: "Government", subcategory: "Village", url: "https://briceohio.com/", description: "Village founded in 1880 on the south-east side of metro Columbus, at 5990 Columbus Street." },
  { name: "Village of Harrisburg", category: "Government", subcategory: "Village", url: "https://harrisburgohio.gov/", description: "Village offices and community centre at 1100 High St. in Harrisburg." },
  { name: "Village of Lockbourne", category: "Government", subcategory: "Village", url: "https://www.lockbourneohio.us/", description: "Village offices at 85 Commerce Street in Lockbourne." },
  { name: "Village of Marble Cliff", category: "Government", subcategory: "Village", url: "https://www.marblecliff.org/", description: "Village in the Tri-Village area north-west of Columbus, with its own building department." },
  { name: "Village of Minerva Park", category: "Government", subcategory: "Village", url: "https://www.minervapark.gov/", description: "Village hall at 2829 Minerva Lake Road in Columbus." },
  { name: "Village of Riverlea", category: "Government", subcategory: "Village", url: "https://www.riverleaohio.org/", description: "Residential village of just over 600 people between High Street and the Olentangy River." },
  { name: "Village of Urbancrest", category: "Government", subcategory: "Village", url: "https://www.villageofurbancrestoh.us/", description: "Administration building and council meeting site at 3492 First Avenue." },
  { name: "Village of Valleyview", category: "Government", subcategory: "Village", url: "https://villageofvalleyview.weebly.com/", description: "Village of 627 residents on the west side of Columbus; the county's own list shows no site for it." },
  { name: "Blendon Township", category: "Government", subcategory: "Township", url: "https://www.blendontwp.org/", description: "Township offices at 6350 S. Hempstead Road in Westerville." },
  { name: "Brown Township", category: "Government", subcategory: "Township", url: "https://www.browntwp.org/", description: "Township office and firehouse meeting location at 2491 Walker Rd. in Hilliard." },
  { name: "Clinton Township", category: "Government", subcategory: "Township", url: "https://www.clintontownship.org/", description: "Trustees meet at 999 Chambers Road; immunisation clinics are held at 3820 Cleveland Avenue." },
  { name: "Franklin Township", category: "Government", subcategory: "Township", url: "https://franklin-townshipohio.gov/", description: "Township offices at 2193 Frank Rd. in Columbus; franklin-township.com redirects here." },
  { name: "Hamilton Township", category: "Government", subcategory: "Township", url: "https://www.hamtwpfcoh.gov/", description: "Township offices at 6400 Lockbourne Rd. Note the domain names the county, to distinguish it from Ohio's other Hamilton Townships." },
  { name: "Jackson Township", category: "Government", subcategory: "Township", url: "https://jacksontwpfranklinoh.gov/", description: "Township office at 3756 Hoover Rd. in Grove City, with fire division headquarters at 3650 Hoover Rd." },
  { name: "Madison Township", category: "Government", subcategory: "Township", url: "https://www.madisontownship.org/", description: "Township established in 1810, with its administration building at 4575 Madison Lane in Groveport." },
  { name: "Mifflin Township", category: "Government", subcategory: "Township", url: "https://mifflin-oh.gov/", description: "Serves Gahanna and unincorporated north-east Franklin County from 400 West Johnstown Road." },
  { name: "Norwich Township", category: "Government", subcategory: "Township", url: "https://www.norwichtownship.org/", description: "Township offices at 5181 Northwest Parkway in Hilliard." },
  { name: "Plain Township", category: "Government", subcategory: "Township", url: "https://plaintownship.org/", description: "Township established in 1810 north-east of Columbus, offices at 45 Second St. in New Albany." },
  { name: "Sharon Township", category: "Government", subcategory: "Township", url: "https://www.sharontwp.us/", description: "Township offices and trustee meeting site at 95 E. Wilson Bridge Road in Worthington." },
  { name: "Truro Township", category: "Government", subcategory: "Township", url: "https://trurotwp.org/", description: "Township office and fire station at 6900 East Main Street in Reynoldsburg." },
  { name: "Washington Township", category: "Government", subcategory: "Township", url: "https://wtwpdublinoh.gov/", description: "Township office at 6200 Eiterman Rd. in Dublin — the only Ohio township spanning three counties." },
  // ---------- Education ----------
  { name: "The Ohio State University", category: "Education", subcategory: "University", url: "https://www.osu.edu", description: "Land-grant university in Columbus, with regional campuses in Lima, Marion, Mansfield, Newark and Wooster." },
  { name: "Columbus State Community College", category: "Education", subcategory: "Community College", url: "https://www.cscc.edu", description: "Two-year college whose Columbus campus is at 550 East Spring St., with a second campus in Delaware." },
  { name: "Capital University", category: "Education", subcategory: "University", url: "https://www.capital.edu", description: "Private university at 1 College and Main in Bexley, which also runs Trinity Lutheran Seminary and a law school on East Broad Street." },
  { name: "Otterbein University", category: "Education", subcategory: "University", url: "https://www.otterbein.edu", description: "Private university at 1 South Grove Street in Westerville." },
  { name: "Franklin University", category: "Education", subcategory: "University", url: "https://www.franklin.edu", description: "Nonprofit university founded in 1902 at 201 S. Grant Ave., focused on programmes for adult learners." },
  { name: "Ohio Dominican University", category: "Education", subcategory: "University", url: "https://www.ohiodominican.edu", description: "Catholic university at 1216 Sunbury Road in Columbus." },
  { name: "Columbus College of Art & Design", category: "Education", subcategory: "College", url: "https://www.ccad.edu", description: "Art and design college at 60 Cleveland Ave. in Columbus." },
  { name: "Pontifical College Josephinum", category: "Education", subcategory: "College", url: "https://www.pcj.edu", description: "Roman Catholic seminary at 7625 N. High St., with a College of Liberal Arts and School of Theology." },
  { name: "Mount Carmel College of Nursing", category: "Education", subcategory: "College", url: "https://www.mccn.edu", description: "Private nursing college on the Mount Carmel campus west of downtown Columbus." },
  { name: "Eastland-Fairfield Career & Technical Schools", category: "Education", subcategory: "Career Center", url: "https://www.eastland-fairfield.com", description: "Career-technical district at 4300 Amalgamated Place in Groveport, serving 16 member districts." },
  { name: "Educational Service Center of Central Ohio", category: "Education", subcategory: "ESC", url: "https://www.escco.org", description: "Regional education service agency at 2080 Citygate Dr. in Columbus." },
  { name: "Columbus City Schools", category: "Education", subcategory: "K-12", url: "https://www.ccsoh.us", description: "Ohio's largest district, with administrative offices at 270 E. State St." },
  { name: "Dublin City Schools", category: "Education", subcategory: "K-12", url: "https://www.dublinschools.net", description: "District office at 5175 Emerald Parkway, running 15 elementary, 5 middle and 4 high schools." },
  { name: "Westerville City Schools", category: "Education", subcategory: "K-12", url: "https://www.westerville.k12.oh.us", description: "District offices at 936 Eastwind Drive; the old wcsoh.org address redirects here." },
  { name: "Hilliard City Schools", category: "Education", subcategory: "K-12", url: "https://www.hilliardschools.org", description: "Central office at 2140 Atlas Street in Columbus." },
  { name: "South-Western City Schools", category: "Education", subcategory: "K-12", url: "https://www.swcsd.us", description: "Grove City-based district, which also runs the South-Western Career Academy." },
  { name: "Worthington City Schools", category: "Education", subcategory: "K-12", url: "https://www.worthington.k12.oh.us", description: "District office at 200 E. Wilson Bridge Rd., serving about 10,800 students across 21 schools." },
  { name: "Gahanna-Jefferson Public Schools", category: "Education", subcategory: "K-12", url: "https://gahannaschools.org", description: "Central office at 630 Morrison Road in Gahanna." },
  { name: "Upper Arlington Schools", category: "Education", subcategory: "K-12", url: "https://www.uaschools.org", description: "District office at 1619 Zollinger Road in Upper Arlington." },
  { name: "Reynoldsburg City Schools", category: "Education", subcategory: "K-12", url: "https://www.reyn.org", description: "District offices at 7244 E. Main Street in Reynoldsburg." },
  { name: "Whitehall City Schools", category: "Education", subcategory: "K-12", url: "https://www.wcsrams.org", description: "District offices at 625 S. Yearling Rd. in Whitehall." },
  { name: "Bexley City Schools", category: "Education", subcategory: "K-12", url: "https://www.bexley.us", description: "District offices at 348 South Cassingham Road; bexleyschools.org redirects here. The city itself is bexley.org." },
  { name: "Grandview Heights Schools", category: "Education", subcategory: "K-12", url: "https://www.ghschools.org", description: "District established in 1906 at 1587 West Third Avenue, running Stevenson Elementary, Larson Middle and Grandview Heights High." },
  { name: "New Albany-Plain Local Schools", category: "Education", subcategory: "K-12", url: "https://www.napls.us", description: "District office at 55 N. High Street, with roughly 5,100 students on a single 80-acre campus." },
  { name: "Groveport Madison Local Schools", category: "Education", subcategory: "K-12", url: "https://www.gocruisers.org", description: "District offices at 4400 Marketing Place in Groveport." },
  { name: "Canal Winchester Local Schools", category: "Education", subcategory: "K-12", url: "https://www.cwls.us", description: "District office at 100 Washington Street in Canal Winchester." },
  { name: "Licking Heights Local Schools", category: "Education", subcategory: "K-12", url: "https://www.lhschools.org", description: "District serving eastern Franklin County residents, headquartered in Licking County." },
  { name: "Hamilton Local Schools", category: "Education", subcategory: "K-12", url: "https://www.hamilton-local.k12.oh.us", description: "District office at 775 Rathmell Road in Columbus; hamiltonrangers.org redirects here." },
  { name: "Madison-Plains Local Schools", category: "Education", subcategory: "K-12", url: "https://www.mplsd.org", description: "Rural district whose elementary school is in London, Madison County, serving south-western county residents." },
  { name: "Columbus Metropolitan Library", category: "Education", subcategory: "Library", url: "https://www.columbuslibrary.org", description: "Open since 1873, with 23 locations across Franklin County and a Main Library at 96 S. Grant Ave." },
  { name: "Westerville Public Library", category: "Education", subcategory: "Library", url: "https://www.westervillelibrary.org", description: "Public library at 126 S. State St. in Westerville." },
  { name: "Worthington Libraries", category: "Education", subcategory: "Library", url: "https://www.worthingtonlibraries.org", description: "Three branches: Old Worthington on High Street, Northwest on Hard Road and Worthington Park." },
  { name: "Upper Arlington Public Library", category: "Education", subcategory: "Library", url: "https://www.ualibrary.org", description: "Three branches led by Tremont Road at 2800 Tremont Road." },
  { name: "Bexley Public Library", category: "Education", subcategory: "Library", url: "https://www.bexleylibrary.org", description: "Public library at 2411 East Main Street in Bexley." },
  { name: "Grandview Heights Public Library", category: "Education", subcategory: "Library", url: "https://www.ghpl.org", description: "Public library at 1685 West First Avenue in Columbus." },
  { name: "Southwest Public Libraries", category: "Education", subcategory: "Library", url: "https://www.swpl.org", description: "Grove City-based system at 3959 Broadway, which also runs the Westland Area Library." },
  { name: "Pickerington Public Library", category: "Education", subcategory: "Library", url: "https://www.pickeringtonlibrary.org", description: "Two locations serving the Pickerington area, headquartered in Fairfield County." },
  // ---------- Health ----------
  { name: "Franklin County Public Health", category: "Health", subcategory: "Public Health", url: "https://myfcph.org", description: "County health district at 280 E. Broad St. in Columbus, serving the areas outside the city's own health department." },
  { name: "Columbus Public Health", category: "Health", subcategory: "Public Health", url: "https://www.columbus.gov/Services/Public-Health", description: "City health department at 240 Parsons Ave. in Columbus." },
  { name: "OhioHealth Riverside Methodist Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/riverside-methodist-hospital", description: "1,059-bed teaching hospital in Columbus, OhioHealth's largest, serving patients since 1892." },
  { name: "OhioHealth Grant Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/grant-medical-center", description: "The only adult hospital in downtown Columbus offering a full range of adult services, recognised for trauma care." },
  { name: "OhioHealth Doctors Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/doctors-hospital", description: "Columbus hospital and osteopathic teaching institution known for emergency and cardiac care." },
  { name: "OhioHealth Dublin Methodist Hospital", category: "Health", subcategory: "Hospital", url: "https://www.ohiohealth.com/locations/hospitals/dublin-methodist-hospital", description: "OhioHealth's hospital in Dublin, serving the county's north-west suburbs." },
  { name: "OSU Wexner Medical Center", category: "Health", subcategory: "Hospital", url: "https://wexnermedical.osu.edu", description: "Ohio State's academic medical centre in Columbus, with a newly opened University Hospital tower." },
  { name: "Arthur G. James Cancer Hospital", category: "Health", subcategory: "Hospital", url: "https://cancer.osu.edu", description: "Ohio State's comprehensive cancer centre and cancer hospital in Columbus." },
  { name: "Nationwide Children's Hospital", category: "Health", subcategory: "Hospital", url: "https://www.nationwidechildrens.org", description: "Pediatric hospital and research institute at 700 Childrens Drive in Columbus." },
  { name: "Mount Carmel Health System", category: "Health", subcategory: "Hospital", url: "https://www.mountcarmelhealth.com", description: "Columbus-based Catholic health system indexing its hospitals and primary care sites across central Ohio." },
  { name: "Mount Carmel East", category: "Health", subcategory: "Hospital", url: "https://www.mountcarmelhealth.com/location/mount-carmel-east", description: "Hospital serving Columbus's east side and home to Mount Carmel's Level II Trauma Center." },
  { name: "Mount Carmel Grove City", category: "Health", subcategory: "Hospital", url: "https://www.mountcarmelhealth.com/location/mount-carmel-grove-city", description: "Grove City's first full-service hospital, at 5300 N. Meadows Dr." },
  { name: "Mount Carmel Franklinton", category: "Health", subcategory: "Clinic", url: "https://www.mountcarmelhealth.com/location/mount-carmel-franklinton", description: "Franklinton outpatient campus with a 24/7 emergency department, imaging and a Women's Health Center." },
  { name: "Select Specialty Hospital — Victorian Village", category: "Health", subcategory: "Hospital", url: "https://www.selectspecialtyhospitals.com/locations-and-tours/oh/columbus/columbus-victorian-village/", description: "162-bed critical illness recovery hospital at 1087 Dennison Ave. in Columbus." },
  { name: "Select Specialty Hospital — Columbus South", category: "Health", subcategory: "Hospital", url: "https://www.selectspecialtyhospitals.com/locations-and-tours/oh/columbus/columbus-south/", description: "43-bed critical illness recovery hospital at 1430 S. High St. in Columbus." },
  { name: "ADAMH Board of Franklin County", category: "Health", subcategory: "Mental Health", url: "https://adamhfranklin.org", description: "Alcohol, Drug and Mental Health Board at 447 E. Broad St., funding more than 30 community partner agencies." },
  { name: "PrimaryOne Health", category: "Health", subcategory: "Clinic", url: "https://primaryonehealth.org", description: "Federally qualified health centre network with a corporate office at 1905 Parsons Avenue and 11 sites." },
  { name: "Lower Lights Ministries", category: "Health", subcategory: "Clinic", url: "https://www.lowerlights.org", description: "Franklinton nonprofit at 1066 Bellows Avenue providing health, housing and recovery services." },
  { name: "Equitas Health", category: "Health", subcategory: "Clinic", url: "https://equitashealth.com", description: "Nonprofit health system headquartered at 1105 Schrock Rd., serving LGBTQ+ patients and people living with HIV." },
  // ---------- Business & Economy ----------
  { name: "Columbus Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://columbus.org", description: "Regional business chamber at 150 South Front Street, Suite 220 in Columbus." },
  { name: "One Columbus", category: "Business & Economy", subcategory: "Economic Development", url: "https://columbusregion.com", description: "Regional economic development organisation at 150 S. Front St., serving an 11-county region." },
  { name: "Columbus Partnership", category: "Business & Economy", subcategory: "Business Coalition", url: "https://columbuspartnership.com/about", description: "CEO coalition working on regional prosperity; only this About path loads reliably." },
  { name: "Experience Columbus", category: "Business & Economy", subcategory: "Tourism", url: "https://www.experiencecolumbus.com", description: "The Greater Columbus Convention and Visitors Bureau, at 629 N. High St." },
  { name: "Ohio Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://ohiochamber.com", description: "Statewide business advocacy organisation headquartered at 34 S. Third St. in Columbus." },
  { name: "Dublin Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.dublinchamber.org", description: "Chamber serving Dublin since 1975, at 129 S. High St." },
  { name: "Westerville Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.westervillechamber.com", description: "Chamber of over 850 members at 99 Commerce Park Dr." },
  { name: "Hilliard Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.hilliardchamber.org", description: "Chamber at 4081 Main Street in Hilliard." },
  { name: "Grove City Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.gcchamber.org", description: "Chamber established in 1978 at 4069 Broadway in Grove City." },
  { name: "Gahanna Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.gahannachamber.org", description: "Chamber at 81 Mill Street in Gahanna; gahannaareachamber.com redirects here." },
  { name: "Worthington Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.worthingtonchamber.org", description: "Chamber serving the area since 1958, with over 560 members." },
  { name: "New Albany Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.newalbanychamber.com", description: "Chamber at 55 W. Main Street in New Albany." },
  { name: "Reynoldsburg Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.reynoldsburgchamber.com", description: "Chamber serving Reynoldsburg and the county's eastern edge." },
  { name: "Canal Winchester Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://canalwinchester.com", description: "Chamber operating since 1956 at 57 W. Waterloo Street." },
  { name: "Whitehall Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.whitehallareachamber.org", description: "Chamber at 360 S. Yearling Road in Whitehall." },
  { name: "Downtown Columbus, Inc.", category: "Business & Economy", subcategory: "Downtown Development", url: "https://downtowncolumbus.com/about-us/", description: "Nonprofit founded in 2002, formerly the Columbus Downtown Development Corporation, behind Columbus Commons and the Scioto Mile." },
  { name: "Capital Crossroads and Discovery SIDs", category: "Business & Economy", subcategory: "Special Improvement District", url: "https://downtownservices.org", description: "Both downtown improvement districts ceased operations on 1 November 2025; their services moved to Safer Downtown." },
  { name: "Columbus Regional Airport Authority", category: "Business & Economy", subcategory: "Airports", url: "https://flycolumbus.com", description: "Operator of John Glenn Columbus International, Rickenbacker International and Bolton Field." },
  { name: "OhioMeansJobs Columbus-Franklin County", category: "Business & Economy", subcategory: "Workforce", url: "https://www.omjcfc.org", description: "County workforce centre at 1111 E. Broad St. in Columbus." },
  { name: "Economic and Community Development Institute", category: "Business & Economy", subcategory: "Small Business", url: "https://www.ecdi.org", description: "Columbus-headquartered nonprofit microlender founded in 2004, which also runs the Food Fort incubator." },
  // ---------- Community & Social ----------
  { name: "United Way of Central Ohio", category: "Community & Social", subcategory: "Nonprofit", url: "https://liveunitedcentralohio.org", description: "Central Ohio funder whose programmes include Stable Families." },
  { name: "The Columbus Foundation", category: "Community & Social", subcategory: "Community Foundation", url: "https://columbusfoundation.org", description: "Community foundation at 1234 East Broad Street, which runs the annual Big Table civic conversation." },
  { name: "Mid-Ohio Food Collective", category: "Community & Social", subcategory: "Food Bank", url: "https://www.midohiofoodbank.org", description: "Regional food bank serving central and eastern Ohio, including Franklin County and Columbus." },
  { name: "Community Shelter Board", category: "Community & Social", subcategory: "Homelessness", url: "https://www.csb.org", description: "Franklin County's homelessness system lead at 355 E. Campus View Blvd., with a 24-hour hotline." },
  { name: "LifeCare Alliance", category: "Community & Social", subcategory: "Seniors", url: "https://www.lifecarealliance.org", description: "Meals on Wheels and visiting nurse provider at 1699 W. Mound St. in Columbus." },
  { name: "IMPACT Community Action", category: "Community & Social", subcategory: "Community Action", url: "https://www.impactca.org", description: "County community action agency at 711 Southwood Avenue, providing utility assistance and weatherisation." },
  { name: "Habitat for Humanity MidOhio", category: "Community & Social", subcategory: "Housing", url: "https://www.habitatmidohio.org", description: "Affordable housing builder at 6665 Busch Boulevard, serving more than 100 families a year." },
  { name: "YMCA of Central Ohio", category: "Community & Social", subcategory: "YMCA", url: "https://www.ymcacolumbus.org", description: "Association with 14 locations and offices at 1907 Leonard Ave. in Columbus." },
  { name: "YWCA Columbus", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.ywcacolumbus.org", description: "140-year-old organisation at 65 S. 4th St., operating the YWCA Family Center emergency shelter." },
  { name: "Goodwill Columbus", category: "Community & Social", subcategory: "Workforce", url: "https://www.goodwillcolumbus.org", description: "Nonprofit founded in 1939 at 671 South High Street, running thrift retail and job training." },
  { name: "Legal Aid Society of Columbus", category: "Community & Social", subcategory: "Legal Services", url: "https://www.columbuslegalaid.org", description: "Civil legal aid provider operating since 1954, with a weekday intake line." },
  { name: "Columbus Urban League", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.cul.org", description: "Organisation founded in 1918 at 788 Mount Vernon Avenue." },
  { name: "Jewish Family Services", category: "Community & Social", subcategory: "Family Services", url: "https://www.jfscolumbus.org", description: "Agency serving central Ohio since 1908, in the Ebner Building at 1070 College Avenue." },
  { name: "US Together", category: "Community & Social", subcategory: "Refugee Services", url: "https://www.ustogether.us", description: "Refugee and immigrant assistance agency with a Columbus office on E. Dublin Granville Rd." },
  { name: "Community Refugee & Immigration Services", category: "Community & Social", subcategory: "Refugee Services", url: "https://www.crisohio.org", description: "CRIS, a refugee resettlement nonprofit established in 1995, at 4645 Executive Drive." },
  // ---------- Recreation & Tourism ----------
  { name: "Columbus and Franklin County Metro Parks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.metroparks.net", description: "Park district with 20 parks, over 28,900 acres and more than 230 miles of trail." },
  { name: "Columbus Recreation and Parks", category: "Recreation & Tourism", subcategory: "Municipal Parks", url: "https://www.columbus.gov/Community/Recreation-and-Parks/", description: "City parks department, which also stewards Old Deaf School Park, the topiary garden." },
  { name: "Franklin Park Conservatory", category: "Recreation & Tourism", subcategory: "Gardens", url: "https://www.fpconservatory.org", description: "Conservatory and botanical gardens at 1777 E. Broad Street in Columbus." },
  { name: "COSI", category: "Recreation & Tourism", subcategory: "Museum", url: "https://cosi.org", description: "The Center of Science and Industry, at 333 West Broad St. in Columbus." },
  { name: "Columbus Museum of Art", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.columbusmuseum.org", description: "Museum founded in 1878 at 480 East Broad Street, with a second site at 632 Park Street." },
  { name: "Ohio History Connection", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.ohiohistory.org", description: "Statewide history organisation at 800 E. 17th Ave., stewarding more than 58 sites in 40 counties." },
  { name: "Wexner Center for the Arts", category: "Recreation & Tourism", subcategory: "Arts Center", url: "https://wexarts.org", description: "Ohio State's contemporary arts centre at 1871 North High Street." },
  { name: "Ohio State Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.ohiostatefair.com", description: "Annual state fair at 717 East 17th Avenue in Columbus." },
  { name: "Ohio Expo Center & State Fairgrounds", category: "Recreation & Tourism", subcategory: "Venue", url: "https://www.ohioexpocenter.com", description: "360-acre venue at 717 East 17th Avenue, including Celeste Center, Taft Coliseum and Kasich Hall." },
  { name: "German Village Society", category: "Recreation & Tourism", subcategory: "Historic District", url: "https://germanvillage.com", description: "Preservation organisation for the German Village historic neighbourhood, at 588 S. 3rd St." },
  { name: "Short North Arts District", category: "Recreation & Tourism", subcategory: "Arts District", url: "https://shortnorth.org", description: "Columbus arts district, which runs the monthly Gallery Hop." },
  { name: "Columbus Zoo and Aquarium", category: "Recreation & Tourism", subcategory: "Zoo", url: "https://www.columbuszoo.org", description: "Zoo with roughly 10,000 animals at 4850 W. Powell Rd. — despite the name, it is in Powell, Delaware County." },
  { name: "Columbus Crew", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.columbuscrew.com", description: "MLS club playing at a 20,808-seat stadium in downtown Columbus, opened in July 2021." },
  { name: "Columbus Blue Jackets", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.nhl.com/bluejackets/", description: "NHL team playing at Nationwide Arena in Columbus." },
  { name: "Nationwide Arena", category: "Recreation & Tourism", subcategory: "Venue", url: "https://www.nationwidearena.com", description: "Arena at 200 West Nationwide Boulevard, home to the Blue Jackets." },
  { name: "Columbus Clippers", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.mlb.com/milb/columbus", description: "Triple-A affiliate of the Cleveland Guardians, playing at Huntington Park." },
  // ---------- News & Media ----------
  { name: "Columbus Underground", category: "News & Media", subcategory: "Online News", url: "https://columbusunderground.com/about/", description: "Online outlet founded in 2001, headquartered at 11 E. Gay Street in downtown Columbus." },
  { name: "Columbus Monthly", category: "News & Media", subcategory: "Magazine", url: "https://www.columbusmonthly.com", description: "City magazine covering Columbus culture, dining and local history." },
  { name: "Matter News", category: "News & Media", subcategory: "Nonprofit News", url: "https://matternews.org", description: "Nonprofit Columbus newsroom covering labour, housing and city government." },
  { name: "Axios Columbus", category: "News & Media", subcategory: "Local News", url: "https://www.axios.com/local/columbus", description: "Local Axios edition covering Columbus and central Ohio." },
  { name: "WOSU Public Media", category: "News & Media", subcategory: "Public Broadcasting", url: "https://wosu.org", description: "Ohio State's public media outlet at 1800 N. Pearl St., operating 89.7 FM, Classical 101 and WOSU TV." },
  { name: "WBNS-10TV", category: "News & Media", subcategory: "Television", url: "https://www.10tv.com", description: "CBS affiliate covering central Ohio." },
  { name: "WSYX ABC 6", category: "News & Media", subcategory: "Television", url: "https://abc6onyourside.com", description: "ABC affiliate covering Columbus and central Ohio." },
  { name: "NBC4 / WCMH-TV", category: "News & Media", subcategory: "Television", url: "https://www.nbc4i.com", description: "NBC affiliate covering Columbus weather, city government and state politics." },
  { name: "The Lantern", category: "News & Media", subcategory: "Student Newspaper", url: "https://www.thelantern.com", description: "Independent Ohio State student newspaper." },
  { name: "Columbus Free Press", category: "News & Media", subcategory: "Alternative Press", url: "https://freepress.org", description: "Independent Columbus news and opinion publication; columbusfreepress.com redirects here." },
];
