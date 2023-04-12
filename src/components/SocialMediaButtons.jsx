import React from 'react'
// import IconButton from '@material-ui/core/IconButton'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import GitHubIcon from '@mui/icons-material/GitHub'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function SocialMediaButtons() {
  const githubUrl = "https://github.com/pedromarmol"
  const linkedinUrl = "https://linkedin.com/in/pedrommartos"
  const twitterUrl = "https://twitter.com/pedromartos_dev"
  
  return (
   <div>
      <a href={twitterUrl}>
        Twitter
        {/* <IconButton>
          <TwitterIcon />
        </IconButton> */}
      </a>
      <a href={githubUrl}>
        GitHub
        {/* <IconButton>
          <GitHubIcon />
        </IconButton> */}
      </a>
      <a href={linkedinUrl}>
        LinkedIn
        {/* <IconButton>
          <LinkedInIcon />
        </IconButton> */}
      </a>
    </div>
  )
}
