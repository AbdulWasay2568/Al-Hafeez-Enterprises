import { motion } from 'framer-motion';
import { FaTruck, FaSnowflake, FaChartLine, FaHeadset, FaBullhorn, FaCog } from 'react-icons/fa';

const ServicesShowcase = () => {
  const services = [
    {
      icon: <FaTruck className="text-3xl text-teal-600" />,
      title: 'Logistics & Distribution',
      description: 'How will things be done? Will it make it there in good shape? Will the ideas be moving enough? How much is left? And how much needs to be brought in? Does it need refrigeration.',
    },
    {
      icon: <FaSnowflake className="text-3xl text-teal-600" />,
      title: 'Cold Chain',
      description: 'With a rich experience, our Cool Chain Network equips us with the capacity to handle logistics and distribution for products that require specific temperatures like food, vaccines.'
    },
    {
      icon: <FaChartLine className="text-3xl text-teal-600" />,
      title: 'Sales',
      description: 'Did it meet the target today or not? Is the average daily doing fine? Are the graphs sky-rocketing? Does it need a push or a pull would do? Some of the questions every brand is answerable.'
    },
    {
      icon: <FaHeadset className="text-3xl text-teal-600" />,
      title: 'After Sales Support',
      description: 'What needs to be done after the deal is done? Can the experience be continued? Can complains be resolved? Can it be replaced? Is the relationship intact? Is it easy to call back.'
    },
    {
      icon: <FaBullhorn className="text-3xl text-teal-600" />,
      title: 'Marketing',
      description: 'Do the people like it? What is it saying and how is it talking? Is it touching hearts and winning minds? Can it get better? Every brand needs to ponder over these questions at all times.'
    },
    {
      icon: <FaCog className="text-3xl text-teal-600" />,
      title: 'Information Technology',
      description: 'Are the processes easy to handle? Is everything on the fingertip? Is information channelized and automatic? Can business process be simplified with technology? Brands and business.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
