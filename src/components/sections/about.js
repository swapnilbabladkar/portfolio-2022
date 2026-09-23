import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'AI/LLM Infra: MCP servers, RAG pipelines',
    'Vector Stores & Embedding Pipelines',
    'Cloud Platforms: AWS, Azure',
    'IaC: Terraform, Ansible, Puppet, Chef',
    'Containerization: Kubernetes, Docker, EKS',
    'CI/CD: GitHub Actions, ArgoCD, Jenkins',
    'CI/CD: GitLab CI, CircleCI, Octopus Deploy',
    'Scripting and Automation: Python, Bash',
    'Monitoring: Prometheus, Grafana, Datadog',
    'Logging: ELK Stack, OpenSearch',
    'Incident Management: PagerDuty, Squadcast',
    'Database Management: PostgreSQL, Redis',
    'GitOps & Release Automation',
    'Infra Cost Optimisation & Security',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Swapnil and I’m a Lead Infrastructure / DevOps Consultant with 9+
              years running mission-critical cloud platforms. My interest in building cloud
              infrastructure started in 2017 at{' '}
              <a href="https://www.ericsson.com/en">Ericsson</a>, deploying their Cloud Native
              Solution on bare-metal <a href="https://kubernetes.io/">Kubernetes</a> — hacking
              together custom resource definitions and Ansible-automated provisioning taught me a
              lot about K8s and telecom-scale infrastructure.
            </p>

            <p>
              Since then I’ve worked across{' '}
              <a href="https://www.nirmata.com/">Nirmata</a> (contributing to open-source Kyverno),{' '}
              <a href="https://www.techprescient.com/">Tech Prescient</a>, and{' '}
              <a href="https://www.thoughtworks.com/">Thoughtworks</a>, where I led DevOps/SRE for
              a major European airline and pioneered AI-first tooling for automated RCA and
              anomaly detection.
            </p>

            <p>
              These days, at <a href="https://www.equalexperts.com/">Equal Experts</a>, my focus
              has shifted to the AI/LLM infrastructure layer — building MCP (Model Context
              Protocol) servers, RAG pipelines, vector stores, and self-service platforms that
              power production GenAI applications for engineering teams.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
