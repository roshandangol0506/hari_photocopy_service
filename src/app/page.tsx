import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, User, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">QUEST</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
          </nav>
          <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center text-sm">X</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Grow your skills,
                <br />
                define your future
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for
                tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">EXPLORE COURSES</Button>
                <Button variant="outline" className="px-8 py-3 bg-transparent">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/test.png"
                alt="Wooden table with decorative vase"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">H2 Heading Module</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src="/images/test.png"
                    alt="Hands reading book"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-white text-gray-700">
                      Big Data
                    </Badge>
                    <Badge className="bg-blue-600">$799 USD</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Advance Logo Design</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna magna, dictumst ac.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">Awesome Author</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">BUTTON</Button>
          </div>
        </div>
      </section>

      {/* Dark Blue Section with Icons */}
      <section className="bg-slate-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">H2 Heading Module</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Image
                   src="/images/test.png"
                    alt="Tools icon"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item}. Lorem Ipsum</h3>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Section with Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Lorem ipsum dolor sit,
                <br />
                consectetur.
              </h2>
              <p className="text-gray-600 mb-8">Pellent commod elit everything you need to get your business going.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">BUTTON TEXT</Button>
                <Button variant="outline">BUTTON TEXT</Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/test.png"
                alt="Countryside path"
                width={500}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <Badge className="bg-blue-100 text-blue-600 mb-2">Featured Teacher</Badge>
                <p className="text-sm font-medium mb-2">
                  "Teaching on Education platform has been an amazing experience."
                </p>
                <div className="text-xs text-gray-500">
                  <div>Lorem Ipsum</div>
                  <div>Teaching Lead at Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Statistics Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Grow your career
                <br />
                today with the
                <br />
                Education courses
              </h2>
              <p className="text-gray-300 mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">EXPLORE COURSES</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-gray-900">9/10</div>
                <div className="text-sm text-gray-600">Overall rating</div>
              </Card>
              <Card className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Creative students</div>
              </Card>
              <Card className="bg-white p-6 text-center col-span-2">
                <div className="text-3xl font-bold text-gray-900">96%</div>
                <div className="text-sm text-gray-600">Satisfaction rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Elephant Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">H2 Heading Module</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/test.png"
                alt="Elephant"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 mt-8">BUTTON</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Building Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">H2 Heading Module</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Image
                  src="/images/test.png"
                  alt="Modern building"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Lorem ipsum dolor</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna magna, dictumst ac.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">H2 Heading Module</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((item) => (
              <Card key={item} className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="text-sm font-medium">Awesome Author</div>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {["100,000+", "100,000+", "100,000+", "100,000+"].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-gray-900">{stat}</div>
                <div className="text-sm text-gray-600">Students worldwide</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">BUTTON</Button>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent news</h2>
              <Card className="overflow-hidden">
                <Image
                  src="/images/test.png"
                  alt="People working"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="bg-blue-100 text-blue-600 mb-3">BUSINESS</Badge>
                  <h3 className="text-xl font-semibold mb-2">Master Adobe - Case Study 1</h3>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">RECENT POSTS</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-4">
                    <Image
                      src="/images/test.png"
                      alt="Recent post"
                      width={80}
                      height={80}
                      className="rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Master Adobe - Case Study {item}</h4>
                      <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">QUEST</div>
              <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l bg-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">SUBMIT</Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Business
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">Copyright Quest 2024 - Powered by Webflow</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
