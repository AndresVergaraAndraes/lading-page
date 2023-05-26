
const header = document.createElement('header')
header.className = 'index-header'

const headerAncor = document.createElement('a')
headerAncor.href = './index.html'

const headerImage = document.createElement('img')
headerImage.className='logo'
headerImage.src = './css//assets/escalab.jpg'
headerImage.alt = 'logo escalab'
headerAncor.appendChild(headerImage)
header.appendChild(headerAncor)



const nav = document.createElement('nav')
header.appendChild(nav)
const firstAncorNav = document.createElement('a')
const secondAncorNav = document.createElement('a')
nav.appendChild(firstAncorNav).innerHTML = 'Home'
nav.appendChild(secondAncorNav).innerHTML = 'Blogs'
firstAncorNav.href = "./index.html"
secondAncorNav.href = "./blogs.html"
firstAncorNav.className = 'index-nav'
secondAncorNav.className = 'index-nav'

export {header}
