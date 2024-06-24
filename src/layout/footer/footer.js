import { isMobile } from 'globals/adaptive.ts'

const subList = document.querySelector('.footer-list .footer-list')
const footerContent = document.querySelector('.footer-content')
if (isMobile) {
  footerContent.append(subList)
}