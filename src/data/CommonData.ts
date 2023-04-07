import { AppDetail, AppsAndGamesData, ProfileData, ProfileDetail } from "../DataType"
import drawOn from "/src/assets/app_images/draw-on.png"
import wordSearch from "/src/assets/app_images/word-search.png"
import noImage from "/src/assets/extra/no_image.png"
import sayam from "/src/assets/profiles/sayam.jpg"
import anubhav from "/src/assets/profiles/anubhav.png"
import nitesh from "/src/assets/profiles/nitesh.png"


//------------------------------------------- Released Apps -------------------------------------
const allApps = Array<AppDetail>()
allApps.push({ imageUrl: drawOn, pageUrl: "../draw-on", title: "Draw On", description: "An easy to use drawing application. Which allows you to color the canvas with your inner inspiration." })
allApps.push({ imageUrl: wordSearch, pageUrl: "../word-search", title: "Word Search", description: "Most loving and entertaining Game, which is designed to help you in improving your focusing as well as learning skills." })
// add more apps here...

export const releasedAppsData: AppsAndGamesData = { heading: "Our Apps & Games", description: "See our apps and games which is available on Play store", apps: allApps }



// ----------------------------------------- Upcoming Apps -------------------------------------
const upcomingApps = Array<AppDetail>()
upcomingApps.push({ imageUrl: noImage, pageUrl: "music-on", title: "Music On", description: "A Simple music app for managing and playing your audio files." })
// add more apps here...

export const upcomingAppsData: AppsAndGamesData = { heading: "Upcoming Apps & Games", description: "Our upcoming Apps & Games will be coming soon", apps: upcomingApps }




//----------------------------------------- All Users Profile -----------------------------------
export const userProfiles = Array<ProfileDetail>()
userProfiles.push({imageUrl: sayam, pageUrl:"profile-sayam", name:"Sayam Sr", about:"Tech Enthusiast , loves to lead . Passionate to make things more easy with tech. In progress to establish a self made brand.", role: "Android developer"})
userProfiles.push({imageUrl: nitesh, pageUrl:"profile-nitesh", name:"Nitesh Kr", about:"Hello, i am an intermediate android developer. I am thanking to work here.", role: "Android & Game developer"})
userProfiles.push({imageUrl: anubhav, pageUrl:"profile-anubhav", name:"Anubhav Jr", about:"A self-taught Android developer with a passion for building mobile applications. Aspiring to become an Engineer.", role: "Android developer"})
// add more profile here...

export const profileData: ProfileData = {heading:"Developers", description:"Hats off for our developers who work together to bring the most incredible and entertaining Apps & Games to your phone.", profiles: userProfiles}

