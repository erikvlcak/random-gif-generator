import githubLogo from './github-mark.png'

function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center">
        Created by{' '}
        <img src={githubLogo} alt="Github logo" className="h-4 w-4 ml-2 mr-2" />{' '}
        <a href="https://github.com/erikvlcak"> Erik Vlcak</a>
      </div>
    </footer>
  )
}

export default Footer
