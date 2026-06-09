'use client';
import { useState, useEffect } from 'react';
import GitHubIcon from '@/icons/socials/GithubIcon'
import LinkedInIcon from '@/icons/socials/LinkedInIcon'



export default function Footer(){
     const [currentYear, setCurrentYear] = useState<number | string>(''); 

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); 
  }, []); 


    return (


        <footer className="bg-foreground m-[20px] mt-0 rounded-[11px] p-[30px] relative overflow-hidden">
            <div className="flex gap-4 justify-between items-center">
                <div className="socials flex gap-4">
                    <GitHubIcon/>
                    <LinkedInIcon/>

                </div>
                <span style={{ color: "var(--accent-two)" }} className="copyright text-xs items-center lowercase">© {currentYear}  John Perez UX | Web Design & Development</span>
            </div>
        </footer>

        
    )

    
}
