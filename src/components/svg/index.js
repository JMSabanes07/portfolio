import { motion } from 'framer-motion'

const SvgPortada = (params) => {
  const variants = {
    container: {
      visible: {
        transition: {
          // staggerChildren: 0.1,
        },
      },
      hidden: {
        transition: {
          // staggerChildren: 0.1,
        },
      },
    },
    textContainer: {
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
      hidden: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    textContainer2: {
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 1,
        },
      },
      hidden: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 1,
        },
      },
    },
    line1: {
      visible: {
        scaleX: 1,
        transition: {
          delay: 0.5,
        },
      },
      hidden: {
        scaleX: 0,
        transition: {
          delay: 0.5,
        },
      },
    },
    line2: {
      visible: {
        scaleX: 1.1,
        transition: {
          delay: 0.2,
        },
      },
      hidden: {
        scaleX: 0,
        transition: {
          delay: 0.2,
        },
      },
    },
    line3: {
      visible: {
        scaleX: 1,
        transition: {
          delay: 0.7,
        },
      },
      hidden: {
        scaleX: 0,
        transition: {
          delay: 0.7,
        },
      },
    },
    line4: {
      visible: {
        scaleX: 1,
        transition: {
          delay: 1,
        },
      },
      hidden: {
        scaleX: 0,
        transition: {
          delay: 1,
        },
      },
    },
    text: {
      visible: {
        scaleX: 1,
      },
      hidden: {
        scaleX: 0,
      },
    },
    button: {
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: {
        opacity: 0,
        y: 100,
      },
    },
    box5: {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 1,
        },
      },
      hidden: {
        opacity: 0,
        x: -100,
        transition: {
          delay: 1,
        },
      },
    },
    boxLine5: {
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: 1,
        },
      },
      hidden: {
        opacity: 0,
        y: -100,
        x: -100,
        transition: {
          delay: 1,
        },
      },
    },
    box1: {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
        },
      },
      hidden: {
        opacity: 0,
        x: -50,
        transition: {
          delay: 0.2,
        },
      },
    },
    boxLine1: {
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: 0.2,
        },
      },
      hidden: {
        opacity: 0,
        y: -50,
        x: -50,
        transition: {
          delay: 0.2,
        },
      },
    },
    box2: {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.7,
        },
      },
      hidden: {
        opacity: 0,
        y: -50,
        transition: {
          delay: 0.7,
        },
      },
    },
    boxLine2: {
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: 0.7,
        },
      },
      hidden: {
        opacity: 0,
        y: -80,
        x: -10,
        transition: {
          delay: 0.7,
        },
      },
    },
    box3: {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.8,
        },
      },
      hidden: {
        opacity: 0,
        y: -30,
        transition: {
          delay: 0.8,
        },
      },
    },
    boxLine3: {
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: 0.8,
        },
      },
      hidden: {
        opacity: 0,
        y: -80,
        x: -10,
        transition: {
          delay: 0.8,
        },
      },
    },
    box4: {
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.4,
        },
      },
      hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
          delay: 0.4,
        },
      },
    },
    boxLine4: {
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay: 0.4,
        },
      },
      hidden: {
        opacity: 0,
        y: -100,
        x: -10,
        transition: {
          delay: 0.4,
        },
      },
    },
    device: {
      visible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    },
    circle3: {
      visible: {
        scale: 1,
        transition: {
          delay: 0.5,
        },
      },
      hidden: {
        scale: 0,
        transition: {
          delay: 0.5,
        },
      },
    },
    circle2: {
      visible: {
        scale: 1,
        transition: {
          delay: 0.3,
        },
      },
      hidden: {
        scale: 0,
        transition: {
          delay: 0.3,
        },
      },
    },
    circle1: {
      visible: {
        scale: 1,
        transition: {
          delay: 1,
        },
      },
      hidden: {
        scale: 0,
        transition: {
          delay: 1,
        },
      },
    },
    circleContainer3: {
      visible: {
        rotate: navigator.userAgent.indexOf('Firefox') <= -1 && 360,
        transition: {
          delay: 0.5,
          duration: 10,
          repeat: Infinity,
          type: 'tween',
          ease: 'linear',
        },
      },
    },
    circleContainer2: {
      visible: {
        rotate: navigator.userAgent.indexOf('Firefox') <= -1 && -360,
        transition: {
          delay: 0.3,
          duration: 40,
          repeat: Infinity,
          type: 'tween',
          ease: 'linear',
        },
      },
    },
    circleContainer1: {
      visible: {
        rotate: navigator.userAgent.indexOf('Firefox') <= -1 && 360,
        transition: {
          delay: 1,
          duration: 8,
          repeat: Infinity,
          type: 'tween',
          ease: 'linear',
        },
      },
    },
  }

  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      variants={variants.container}
      id="bg"
      xmlns="http://www.w3.org/2000/svg"
      width="1139.1709"
      height="654.5432"
      viewBox="0 0 1139.1709 654.5432"
    >
      <motion.rect
        variants={variants.line1}
        id="line1"
        x="304.1714"
        y="447.5432"
        width="732.9995"
        height="2"
      />
      <motion.g variants={variants.textContainer} id="texto1">
        <motion.rect
          variants={variants.text}
          x="439.1017"
          y="145.279"
          width="200.3073"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="439.1017"
          y="161.8983"
          width="200.3073"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="439.1017"
          y="178.5177"
          width="200.3073"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="439.1017"
          y="195.1371"
          width="200.3073"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="439.1017"
          y="211.7565"
          width="200.3073"
          height="5.2482"
        />
        <motion.rect
          variants={variants.button}
          x="509.9527"
          y="240.6217"
          width="58.6052"
          height="12.2459"
        />
      </motion.g>
      <motion.g variants={variants.container} id="box5">
        <motion.rect
          variants={variants.box5}
          x="614.9172"
          y="56.9338"
          width="24.4917"
          height="24.4917"
        />
        <motion.path
          variants={variants.boxLine5}
          d="M650.78,92.7967H621.04v-29.74h29.74Zm-28.4469-1.293h27.1539V64.35H622.3332Z"
        />
      </motion.g>
      <motion.g variants={variants.device} id="notebook">
        <motion.path d="M683.7928,18.6522h-260.17V13.29H305.6522v5.3623H44.41A17.5984,17.5984,0,0,0,26.8116,36.2507V392.5029A17.5985,17.5985,0,0,0,44.41,410.1014H683.7928a17.5985,17.5985,0,0,0,17.5985-17.5985V36.2507A17.5985,17.5985,0,0,0,683.7928,18.6522Zm-320.2276,8.58a6.4348,6.4348,0,1,1-6.4348,6.4348A6.4348,6.4348,0,0,1,363.5652,27.2319ZM677.7971,403.6666H50.4058V49.7536H677.7971Z" />
        <motion.path d="M719.0071,397.2319H657.7778V392.82a.8747.8747,0,0,0-.8747-.8747H635.91a.8747.8747,0,0,0-.8746.8747h0v4.4116H621.9149V392.82a.8747.8747,0,0,0-.8746-.8747h-20.993a.8747.8747,0,0,0-.8747.8747h0v4.4116H586.052V392.82a.8747.8747,0,0,0-.8747-.8747H564.1844a.8747.8747,0,0,0-.8747.8747h0v4.4116H550.1891V392.82a.8747.8747,0,0,0-.8747-.8747H528.3215a.8747.8747,0,0,0-.8747.8747h0v4.4116H514.3262V392.82a.8747.8747,0,0,0-.8747-.8747H492.4586a.8747.8747,0,0,0-.8747.8747h0v4.4116H478.4634V392.82a.8747.8747,0,0,0-.8747-.8747H456.5958a.8747.8747,0,0,0-.8747.8747h0v4.4116H442.6005V392.82a.8747.8747,0,0,0-.8747-.8747H277.2813a.8747.8747,0,0,0-.8747.8747h0v4.4116H263.2861V392.82a.8747.8747,0,0,0-.8747-.8747h-20.993a.8747.8747,0,0,0-.8746.8747h0v4.4116H227.4232V392.82a.8747.8747,0,0,0-.8747-.8747H205.5556a.8747.8747,0,0,0-.8747.8747h0v4.4116H191.56V392.82a.8747.8747,0,0,0-.8747-.8747H169.6927a.8747.8747,0,0,0-.8747.8747h0v4.4116H155.6974V392.82a.8745.8745,0,0,0-.8746-.8747H133.83a.8747.8747,0,0,0-.8747.8747h0v4.4116H119.8345V392.82a.8747.8747,0,0,0-.8746-.8747H97.9669a.8747.8747,0,0,0-.8747.8747h0v4.4116H83.9716V392.82a.8747.8747,0,0,0-.8746-.8747H62.104a.8747.8747,0,0,0-.8747.8747h0v4.4116H20.9929A20.9929,20.9929,0,0,0,0,418.2248v9.4925A20.993,20.993,0,0,0,20.9929,448.71H719.0071A20.9929,20.9929,0,0,0,740,427.7172v-9.4925A20.993,20.993,0,0,0,719.0071,397.2319Z" />
      </motion.g>
      <motion.g variants={variants.circleContainer3} id="circulo3">
        <motion.circle
          variants={variants.circle3}
          cx="148.5737"
          cy="316.8764"
          r="60.3068"
        />
        <motion.path
          variants={variants.circle3}
          d="M163.1714,354.5432a76,76,0,1,1,76-76A76,76,0,0,1,163.1714,354.5432Zm0-150a74,74,0,1,0,74,74A74,74,0,0,0,163.1714,204.5432Z"
        />
      </motion.g>
      <motion.rect
        variants={variants.line2}
        id="line2"
        x="586.1714"
        y="32.5432"
        width="254.9995"
        height="2"
      />
      <motion.rect
        variants={variants.line3}
        id="line3"
        x="406.1714"
        y="560.5432"
        width="732.9995"
        height="2"
      />
      <motion.rect
        variants={variants.line4}
        id="line4"
        x="192.6716"
        y="652.5432"
        width="254.9995"
        height="2"
      />
      <motion.g variants={variants.container} id="box2">
        <motion.rect
          variants={variants.box2}
          x="471"
          y="550"
          width="28"
          height="28"
        />
        <motion.path
          variants={variants.boxLine2}
          d="M516,562H482V528h34Zm-32.5217-1.4783h31.0434V529.4783H483.4783Z"
        />
      </motion.g>
      <motion.g variants={variants.container} id="box3">
        <motion.rect
          variants={variants.box3}
          x="796"
          y="22"
          width="28"
          height="28"
        />
        <motion.path
          variants={variants.boxLine3}
          d="M841,34H807V0h34Zm-32.5217-1.4783h31.0434V1.4783H808.4783Z"
        />
      </motion.g>
      <motion.g variants={variants.container} id="box4">
        <motion.rect
          variants={variants.box4}
          x="1078"
          y="550"
          width="28"
          height="28"
        />
        <motion.path
          variants={variants.boxLine4}
          d="M1123,562h-34V528h34Zm-32.5217-1.4783h31.0434V529.4783h-31.0434Z"
        />
      </motion.g>
      <motion.g variants={variants.device} id="celular">
        <motion.path d="M1057.1714,231.9583h-2.3787V166.7966a37.7138,37.7138,0,0,0-37.7137-37.7138H879.0255a37.7137,37.7137,0,0,0-37.7139,37.7136V524.278a37.7137,37.7137,0,0,0,37.7137,37.7138H1017.079a37.7138,37.7138,0,0,0,37.7138-37.7137V278.3413h2.3787Zm-10.41,294.0148a28.1652,28.1652,0,0,1-28.16,28.17h-138.72a28.1651,28.1651,0,0,1-28.16-28.17v-356.96a28.1631,28.1631,0,0,1,28.16-28.16h16.83a13.379,13.379,0,0,0,12.39,18.43h79.09a13.3792,13.3792,0,0,0,12.39-18.43h18.02a28.1632,28.1632,0,0,1,28.16,28.16Z" />
      </motion.g>
      <motion.g variants={variants.textContainer2} id="texto2">
        <motion.rect
          variants={variants.text}
          x="928.5797"
          y="376.2177"
          width="41.3235"
          height="12.2458"
        />
        <motion.rect
          variants={variants.text}
          x="878.6213"
          y="280.8749"
          width="141.2403"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="878.6213"
          y="297.4943"
          width="141.2403"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="878.6213"
          y="314.1137"
          width="141.2403"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="878.6213"
          y="330.7331"
          width="141.2403"
          height="5.2482"
        />
        <motion.rect
          variants={variants.text}
          x="878.6213"
          y="347.3524"
          width="141.2403"
          height="5.2482"
        />
      </motion.g>
      <motion.g variants={variants.container} id="box1">
        <motion.rect
          variants={variants.box1}
          x="929.6835"
          y="211.1787"
          width="24.4918"
          height="24.4917"
        />
        <motion.path
          variants={variants.boxLine1}
          d="M939.0593,217.3032v29.74h29.74v-29.74Zm28.45,28.45h-27.16v-27.16h27.16Z"
        />
      </motion.g>
      <motion.g variants={variants.circleContainer2} id="circulo2">
        <motion.circle
          variants={variants.circle2}
          cx="246.8268"
          cy="521.7648"
          r="59.2433"
        />
        <motion.path
          variants={variants.circle2}
          d="M320.1714,654.5432a87,87,0,1,1,87-87A87,87,0,0,1,320.1714,654.5432Zm0-172a85,85,0,1,0,85,85A85,85,0,0,0,320.1714,482.5432Z"
        />
      </motion.g>
      <motion.g variants={variants.circleContainer1} id="circulo1">
        <motion.circle
          variants={variants.circle1}
          cx="937.2415"
          cy="498.7069"
          r="43.8678"
        />
        <motion.path
          variants={variants.circle1}
          d="M950.1714,532.5432a55,55,0,1,1,55-55A55,55,0,0,1,950.1714,532.5432Zm0-108a53,53,0,1,0,53,53h0A53.06,53.06,0,0,0,950.1714,424.5432Z"
        />
      </motion.g>
    </motion.svg>
  )
}

export default SvgPortada
