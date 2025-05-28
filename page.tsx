import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0] dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Jane Austen</h1>
                <p className="text-xl text-muted-foreground">Award-winning author of contemporary fiction</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/books">
                  <Button className="px-8">View Books</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="px-8">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[300px] sm:h-[450px] sm:w-[400px]">
                <Image
                  src="/placeholder.svg?height=450&width=400"
                  alt="Author portrait"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Books</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">Discover my latest works and bestsellers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {books.map((book, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[2/3] relative">
                  <Image
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-medium">{book.price}</span>
                    <Link href={`/books/${book.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/books">
              <Button variant="outline">View All Books</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0] dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <p className="text-muted-foreground">
                  I've been writing stories since I was a child, captivated by the power of words to transport readers
                  to new worlds. My journey as an author began fifteen years ago with my debut novel "Whispers in the
                  Wind," which unexpectedly became a national bestseller.
                </p>
                <p className="text-muted-foreground">
                  Since then, I've published twelve novels, each exploring the complexities of human relationships and
                  the resilience of the human spirit. My work has been translated into twenty-three languages and
                  adapted for both stage and screen.
                </p>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Author at writing desk"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from the Blog</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Thoughts on writing, publishing, and life
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {blogPosts.map((post, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button variant="outline">View All Posts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f5f0] dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Subscribe to my newsletter for book releases, events, and exclusive content
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">I'll never share your email. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const books = [
  {
    title: "The Silent Echo",
    slug: "the-silent-echo",
    description: "A haunting tale of loss and redemption set in a small coastal town.",
    price: "$18.99",
    cover: "/placeholder.svg?height=450&width=300",
  },
  {
    title: "Beyond the Horizon",
    slug: "beyond-the-horizon",
    description: "An epic journey across continents in search of a long-lost family secret.",
    price: "$21.99",
    cover: "/placeholder.svg?height=450&width=300",
  },
  {
    title: "Whispers in the Wind",
    slug: "whispers-in-the-wind",
    description: "The debut novel that captivated readers worldwide with its lyrical prose.",
    price: "$16.99",
    cover: "/placeholder.svg?height=450&width=300",
  },
]

const blogPosts = [
  {
    title: "Finding Inspiration in Everyday Life",
    slug: "finding-inspiration",
    date: "May 15, 2023",
    excerpt: "How the mundane moments often lead to the most extraordinary stories.",
  },
  {
    title: "My Writing Process Revealed",
    slug: "writing-process",
    date: "April 22, 2023",
    excerpt: "A behind-the-scenes look at how I craft my novels from concept to completion.",
  },
  {
    title: "Navigating the Publishing World",
    slug: "navigating-publishing",
    date: "March 10, 2023",
    excerpt: "Tips and insights for new authors looking to break into traditional publishing.",
  },
]
