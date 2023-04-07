import { AppDetail, AppsAndGamesData, ProfileData, ProfileDetail } from "../DataType"
import drawOn from "/src/assets/app_images/draw-on.png"
import wordSearch from "/src/assets/app_images/word-search.png"
import noImage from "/src/assets/extra/no_image.png"
import sayam from "/src/assets/profiles/sayam.jpg"
import anubhav from "/src/assets/profiles/anubhav.png"
import nitesh from "/src/assets/profiles/nitesh.png"


//------------------------------------------- Released Apps -------------------------------------
const allApps = Array<AppDetail>()
allApps.push({ imageUrl: drawOn, pageUrl: "../draw-on", title: "Draw On", description: "A simple drawing app to draw your needs. It will help in showing your art." })
allApps.push({ imageUrl: wordSearch, pageUrl: "../word-search", title: "Word Search", description: "A simple word search game in which you have to find the words before you ran out of time." })
// add more apps here...

export const releasedAppsData: AppsAndGamesData = { heading: "Our Apps & Games", description: "See our apps and games which is available on Play store", apps: allApps }



// ----------------------------------------- Upcoming Apps -------------------------------------
const upcomingApps = Array<AppDetail>()
upcomingApps.push({ imageUrl: noImage, pageUrl: "music-on", title: "Music On", description: "A Simple music app for managing and playing your audio files." })
// add more apps here...

export const upcomingAppsData: AppsAndGamesData = { heading: "Upcoming Apps & Games", description: "Our upcoming Apps & Games will be coming soon", apps: upcomingApps }




//----------------------------------------- All Users Profile -----------------------------------
const profiles = Array<ProfileDetail>()
profiles.push({imageUrl: sayam, pageUrl:"profile-sayam", name:"Sayam Sr", about:" A self-taught Android developer with a passion for building mobile applications.Aspiring to become an a self based brand."})
profiles.push({imageUrl: nitesh, pageUrl:"profile-nitesh", name:"Nitesh kr", about:"Hello, i am an intermediate android developer. I am thanking to work here."})
profiles.push({imageUrl: anubhav, pageUrl:"profile-anubhav", name:"Anubhav Jr", about:"A self-taught Android developer with a passion for building mobile applications.Aspiring to become an Engineer."})
// add more profile here...

export const profileData: ProfileData = {heading:"Developers", description:"We are giving thanks to all our developers who have worked together to make such kind of apps and game.", profiles:profiles}

