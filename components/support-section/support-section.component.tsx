// Utils
import styled from "styled-components"
import { motion, Variants } from "framer-motion"

// Components
import Image from "../image/image.component"
import SectionHeading from "../section-heading/section-heading.component"

const SupportSection: React.FC = () => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      // y: 100,
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        delay: 0.5,
        // delayChildren: 0.2,
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 358,
        damping: 60,
      },
    },
  }

  return (
    <Section>
      <SectionHeading variant="GREEN">Supported by</SectionHeading>

      <Row
        variants={variants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
      >
        <Col variants={itemVariants}>
          <Title>Web Wallets:</Title>

          <PartnersDirectory>
            <a href="https://talisman.xyz/">
              <Image
                src="/assets/support-section/talisman-v2.svg"
                alt="talisman"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <a href="https://polkadot.js.org/extension/">
              <Image
                src="/assets/support-section/polkadot-v2.svg"
                alt="polkadot"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <a href="https://subwallet.app/">
              <Image
                src="/assets/support-section/sub-wallet-v2.png"
                alt="subwallet"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <a href="https://www.enkrypt.com/">
              <Image
                src="/assets/support-section/enkrypt-logo-color-v2.png"
                alt="enkrypt"
                width={"100%"}
                height={"100%"}
              />
            </a>
          </PartnersDirectory>
        </Col>
        <Col variants={itemVariants}>
          <Title>Mobile Wallets:</Title>

          <PartnersDirectory>
            <a href="https://novawallet.io/">
              <Image
                src="/assets/support-section/nova-v3.png"
                alt="Nova"
                width={"100%"}
                height={"100%"}
              />
            </a>
          </PartnersDirectory>
        </Col>
      </Row>
    </Section>
  )
}

export default SupportSection

const Section = styled.section`
  padding: 11.8rem 2rem 0;

  h2 {
    margin-bottom: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 14.2rem 4rem 0;

    h2 {
      margin-bottom: 2.4rem;
    }
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 18rem 2rem 0;

      h2 {
        margin-bottom: 4.5rem;
      }
    }
  }
`

const Row = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    }
  }
`

const Col = styled(motion.div)`
  max-width: 58.4rem;
  width: 100%;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.supportSection.colBackground};
  border: ${({ theme }) => theme.supportSection.colBorder};

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: start;
    justify-content: center;
    padding: 3.1rem 1.56rem 3.1rem 3rem;
    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 5.2rem 2.6rem 5.2rem 4rem;
    }
  }
`

const Title = styled(motion.h3)`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 120%;
  color: ${({ theme }) => theme.supportSection.mobileColor};
  text-align: center;

  br {
    /* display: none;
		visibility: hidden; */
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    color: ${({ theme }) => theme.supportSection.color};
    font-weight: 900;
    font-size: 2.64rem;
    margin-bottom: 2.4rem;
    text-align: start;

    br {
      display: block;
      visibility: visible;
    }

    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 4.4rem;
      margin-bottom: 4rem;
    }
  }
`

const PartnersDirectory = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 4.2rem;

  a {
    display: block;
    width: 4.2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: flex-start;
    height: 3.2rem;
    a {
      width: 3.2rem;
    }

    @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 6rem;
      a {
        width: 6.2rem;
      }
    }
  }
`
