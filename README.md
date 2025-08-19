\documentclass[10pt, letterpaper]{article}

% Packages:
\usepackage[
    ignoreheadfoot, % set margins without considering header and footer
    top=2 cm, % seperation between body and page edge from the top
    bottom=2 cm, % seperation between body and page edge from the bottom
    left=2 cm, % seperation between body and page edge from the left
    right=2 cm, % seperation between body and page edge from the right
    footskip=1.0 cm, % seperation between body and footer
    % showframe % for debugging 
]{geometry} % for adjusting page geometry
\usepackage{titlesec} % for customizing section titles
\usepackage{tabularx} % for making tables with fixed width columns
\usepackage{array} % tabularx requires this
\usepackage[dvipsnames]{xcolor} % for coloring text
\definecolor{primaryColor}{RGB}{0, 0, 0} % define primary color
\usepackage{enumitem} % for customizing lists
\usepackage{fontawesome5} % for using icons
\usepackage{amsmath} % for math
\usepackage[
    pdftitle={John Doe's CV},
    pdfauthor={John Doe},
    pdfcreator={LaTeX with RenderCV},
    colorlinks=true,
    urlcolor=primaryColor
]{hyperref} % for links, metadata and bookmarks
\usepackage[pscoord]{eso-pic} % for floating text on the page
\usepackage{calc} % for calculating lengths
\usepackage{bookmark} % for bookmarks
\usepackage{lastpage} % for getting the total number of pages
\usepackage{changepage} % for one column entries (adjustwidth environment)
\usepackage{paracol} % for two and three column entries
\usepackage{ifthen} % for conditional statements
\usepackage{needspace} % for avoiding page brake right after the section title
\usepackage{iftex} % check if engine is pdflatex, xetex or luatex

% Ensure that generate pdf is machine readable/ATS parsable:
\ifPDFTeX
    \input{glyphtounicode}
    \pdfgentounicode=1
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage{lmodern}
\fi

\usepackage{charter}

% Some settings:
\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt} % remove space before adjustwidth environment
\pagestyle{empty} % no header or footer
\setcounter{secnumdepth}{0} % no section numbering
\setlength{\parindent}{0pt} % no indentation
\setlength{\topskip}{0pt} % no top skip
\setlength{\columnsep}{0.15cm} % set column seperation
\pagenumbering{gobble} % no page numbering

\titleformat{\section}{\needspace{4\baselineskip}\bfseries\large}{}{0pt}{}[\vspace{1pt}\titlerule]

\titlespacing{\section}{
    % left space:
    -1pt
}{
    % top space:
    0.3 cm
}{
    % bottom space:
    0.2 cm
} % section title spacing

\renewcommand\labelitemi{$\vcenter{\hbox{\small$\bullet$}}$} % custom bullet points
\newenvironment{highlights}{
    \begin{itemize}[
        topsep=0.10 cm,
        parsep=0.10 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=0 cm + 10pt
    ]
}{
    \end{itemize}
} % new environment for highlights


\newenvironment{highlightsforbulletentries}{
    \begin{itemize}[
        topsep=0.10 cm,
        parsep=0.10 cm,
        partopsep=0pt,
        itemsep=0pt,
        leftmargin=10pt
    ]
}{
    \end{itemize}
} % new environment for highlights for bullet entries

\newenvironment{onecolentry}{
    \begin{adjustwidth}{
        0 cm + 0.00001 cm
    }{
        0 cm + 0.00001 cm
    }
}{
    \end{adjustwidth}
} % new environment for one column entries

\newenvironment{twocolentry}[2][]{
    \onecolentry
    \def\secondColumn{#2}
    \setcolumnwidth{\fill, 4.5 cm}
    \begin{paracol}{2}
}{
    \switchcolumn \raggedleft \secondColumn
    \end{paracol}
    \endonecolentry
} % new environment for two column entries

\newenvironment{threecolentry}[3][]{
    \onecolentry
    \def\thirdColumn{#3}
    \setcolumnwidth{, \fill, 4.5 cm}
    \begin{paracol}{3}
    {\raggedright #2} \switchcolumn
}{
    \switchcolumn \raggedleft \thirdColumn
    \end{paracol}
    \endonecolentry
} % new environment for three column entries

\newenvironment{header}{
    \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.5}
}{
    \par\kern\topsep
} % new environment for the header

\newcommand{\placelastupdatedtext}{% \placetextbox{<horizontal pos>}{<vertical pos>}{<stuff>}
  \AddToShipoutPictureFG*{% Add <stuff> to current page foreground
    \put(
        \LenToUnit{\paperwidth-2 cm-0 cm+0.05cm},
        \LenToUnit{\paperheight-1.0 cm}
    ){\vtop{{\null}\makebox[0pt][c]{
        \small\color{gray}\textit{Last updated in September 2024}\hspace{\widthof{Last updated in September 2024}}
    }}}%
  }%
}%

% save the original href command in a new command:
\let\hrefWithoutArrow\href

% new command for external links:


\begin{document}
    \newcommand{\AND}{\unskip
        \cleaders\copy\ANDbox\hskip\wd\ANDbox
        \ignorespaces
    }
    \newsavebox\ANDbox
    \sbox\ANDbox{$|$}

    \begin{header}
        \fontsize{25 pt}{25 pt}\selectfont Anil Kumar

        \vspace{5 pt}

        \normalsize
        \mbox{Greate Noida}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{mailto:anilkumar.202pr@gmail.com}{anilkumar.202pr@gmail.com}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{tel:+91-7667868270}{7667868270}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://www.linkedin.com/in/anil-kumar-5a499a16b/}{linkedin}}%
        \kern 5.0 pt%
        \AND%
        \kern 5.0 pt%
        \mbox{\hrefWithoutArrow{https://github.com/anilkumar9622}{github}}%
    \end{header}

    \vspace{5 pt - 0.3 cm}

\section{Education}
        \begin{twocolentry}{
            July 2018 – Aug 2022
        }
            \textbf{United Group of Institutions}, B.Tech(CSE), Greater Noida - 8.1 CGPA \end{twocolentry}

        \vspace{0.10 cm}
        
         \begin{twocolentry}{
            May 2017
        }
            \textbf{D.A.V Public School}, Bokaro - 83\% 
            \end{twocolentry}
 \vspace{0.10 cm}
             \begin{twocolentry}{
            June 2015
        }
            \textbf{S.S.V.M Baghmara}, Dhanbad - 8.2 CGPA 
            \end{twocolentry}

\section{Technologies}



        
        \begin{onecolentry}
            \textbf{Languages:} SQL, JavaScript, Typescript
        \end{onecolentry}

        \vspace{0.2 cm}

        \begin{onecolentry}
            \textbf{Technologies:} HTML, CSS, Reactjs, Nextjs, Nodejs, Express, Redux, Strapi, Tailwind, antd
        \end{onecolentry}
 \vspace{0.2 cm}

        \begin{onecolentry}
            \textbf{Cloud Tools:} AWS S3 bucket, VPS, Jenkins, Heroku, Awardspace
        \end{onecolentry}
         \vspace{0.2 cm}

        \begin{onecolentry}
            \textbf{Database:} MySQL, Postgres, MongoDB
        \end{onecolentry}
          \vspace{0.2 cm}
     \begin{onecolentry}
            \textbf{Versioning And Other Tools:} Git, Github, Gitlab, Jira, VS Code
        \end{onecolentry}
             
    



        
      


    
      
    \section{Experience}



        
        \begin{twocolentry}{
            July 2025 – Present
        }
            \textbf{Full Stack Developer}, Kooqx IT Solution Pvt. Ltd. -- Noida\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item Built secure course purchasing and authentication flows for Educandle LMS using Next.js, Node.js, and Strapi.
                \item Implemented forex trading modules and integrated community chat features using React and Socket.io
               
            \end{highlights}
        \end{onecolentry}


        \vspace{0.2 cm}

        \begin{twocolentry}{
            Jan 2022 – Mar 2025
        }
            \textbf{Software Engineer}, Kloudrac Software Pvt. Ltd. -- Noida\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item Developed scalable multi-tenant architecture for SaleoFast and Network18 using Node.js, Express, and PostgreSQL
                \item Built reusable React.js components and configurable domain-based API logic for multilingual content delivery
                \item Automated deployment pipelines using GitLab CI/Jenkins, and deployed apps on Heroku/Awardspace
               
            \end{highlights}
        \end{onecolentry}



    
    
    \section{Projects}
  \begin{twocolentry}{
            \href{https://github.com/sinaatalay/rendercv}{github.com/name/repo}
        }
            \textbf{EduCandle (Jul 2025 – Present)}\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item Educandle is an LMS platform that provides secure course purchase and authentication, enables students to access structured forex trading content
              
            \end{highlights}
        \end{onecolentry}
           \vspace{0.10 cm}
  \begin{twocolentry}{
            2002
        }
            \textbf{Saleofast - Multi Tenant (Sept 2024 – Mar 2025)}\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item SaleoFast is a multi-tenant platform comprising various applications for channel
partners, CRM, DMS, and media. It helps businesses expand by enabling customer engagement and
streamlining operations through a unified app ecosystem.
               
            \end{highlights}
        \end{onecolentry}

        
      


        \vspace{0.2 cm}

        \begin{twocolentry}{
            \href{https://github.com/sinaatalay/rendercv}{URL - Confidential}
        }
            \textbf{Pladis Sales (Nov 2023 – Aug 2024) }\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item  It is a B2B sales application targeting retailers and wholesalers. Salespersons visit
outlets/stores to take orders for company products, providing comprehensive statistics, analysis, and
performance insights.
              
            \end{highlights}
        \end{onecolentry}


        \vspace{0.2 cm}
  \begin{twocolentry}{
            \href{https://github.com/sinaatalay/rendercv}{github.com/name/repo}
        }
            \textbf{Network18 - Multi Tenant (Oct 2022 – Sept 2023)}\end{twocolentry}

        \vspace{0.10 cm}
        \begin{onecolentry}
            \begin{highlights}
                \item This project targets 11 languages, serving content through a single core codebase.
The multi-language domain is managed through a single, configurable repository that calls APIs based on
domain-specific configurations. 
            
            \end{highlights}
        \end{onecolentry}
      


\section{Extra/Personal}

    \begin{onecolentry}
        \begin{highlightsforbulletentries}


        \item Comprehensive problem solving abilities.
         \item Team mentor in News18, with man-management skills.
          \item Good verbal and written communication skills.
           \item Willingness to learn \& quick learning potential.

        % \item There are 7 unique entry types: \textit{BulletEntry}, \textit{TextEntry}, \textit{EducationEntry}, \textit{ExperienceEntry}, \textit{NormalEntry}, \textit{PublicationEntry}, and \textit{OneLineEntry}.

        % \item \href{https://docs.rendercv.com/user_guide/}{Here}, you can find a comprehensive user guide for RenderCV.


        \end{highlightsforbulletentries}
    \end{onecolentry}


   


    

\end{document}
