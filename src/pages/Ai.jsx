import React from 'react'
import { Link } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import { useTheme } from '../context/ThemeContext';

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LineChart(props) {
  const { isDarkMode } = useTheme();
  const data = [
    {
      id: 'Accuracy',
      data: [
        { x: 'Epoch 1', y: 70 },
        { x: 'Epoch 2', y: 75 },
        { x: 'Epoch 3', y: 80 },
        { x: 'Epoch 4', y: 85 },
        { x: 'Epoch 5', y: 87 },
        { x: 'Epoch 6', y: 90 },
      ],
    },
    {
      id: 'Loss',
      data: [
        { x: 'Epoch 1', y: 0.6 },
        { x: 'Epoch 2', y: 0.5 },
        { x: 'Epoch 3', y: 0.4 },
        { x: 'Epoch 4', y: 0.3 },
        { x: 'Epoch 5', y: 0.25 },
        { x: 'Epoch 6', y: 0.2 },
      ],
    },
  ];

  return (
    <div {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={isDarkMode ? ['#C4B5FD', '#A7F3D0'] : ['#C4B5FD', '#A7F3D0']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          background: isDarkMode ? '#1F2937' : '#F9FAFB',
          textColor: isDarkMode ? '#FFFFFF' : '#111827',
          tooltip: {
            container: {
              background: isDarkMode ? '#1F2937' : '#FFFFFF',
              color: isDarkMode ? '#FFFFFF' : '#111827',
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
            chip: {
              background: isDarkMode ? '#FFFFFF' : '#000000',
            },
          },
          grid: {
            line: {
              stroke: isDarkMode ? '#374151' : '#f3f4f6',
            },
          },
          axis: {
            domain: {
              line: {
                stroke: isDarkMode ? '#FFFFFF' : '#000000',
              },
            },
            ticks: {
              line: {
                stroke: isDarkMode ? '#FFFFFF' : '#000000',
                strokeWidth: 1,
              },
              text: {
                fill: isDarkMode ? '#FFFFFF' : '#000000',
              },
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default function Ai() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-[100dvh] transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      <main className="flex-1 p-10">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 p-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2" data-aos="fade-right" data-aos-duration="1000">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Artificial Intelligence
                  </h1>
                  <p className={`max-w-[600px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} md:text-xl`}>
                    I have been working on cutting-edge AI technologies, such as classifications models and object detection algorithms, including Yolo, Yunet, and Haarcascade. Currently, I am working on a face-anti spoofing project that involves detecting if a face is real or fake using various criteria like image quality, blink detection, and AI-generated 3D images.
                  </p>
                </div>
              </div>
              <img
                src="ia/CyberPunk.webp"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="models" className={`w-full md:py-10 lg:py-32 p-10 transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="container px-4 md:px-6" data-aos="zoom-in" data-aos-duration="1200">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pushing the Boundaries of Face Spoofing Detection
                </h2>
                <p className={`max-w-[900px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} md:text-xl`}>
                  I am currently engaged in a face-anti spoofing project at the Tecnologico de Costa Rica. This project aims to determine if a face is real or fake using criteria like image quality, blink detection, and AI-generated 3D images. I have gained experience in training and evaluating models to enhance the accuracy of these detection systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className='w-full aspect-[4/3]'>
              <LineChart className="w-full aspect-[4/3]"/>
              </div>
              {/*<LineChart className="w-full aspect-[4/3]" />*/}
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Model Training and Evaluation</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        I have learned to train and evaluate models, focusing on improving their performance with each iteration.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Blink Detection</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        Implemented a blink detection system to enhance the reliability of face spoofing detection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">3D Image Generation</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        Used AI to generate 3D images for more robust face spoofing detection, ensuring a higher level of security.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              All the information and algorithms used in this project are on my GitHub repository. You can access it by clicking the button below.
            </p>
            <button></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

