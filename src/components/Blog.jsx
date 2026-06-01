import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBlog, FaSearch, FaCalendarAlt, FaUser, FaTag, 
  FaArrowRight, FaClock, FaTimes, FaGithub, FaCode, 
  FaBrain, FaReact, FaJava, FaCloud, FaStar, FaEye,
  FaThumbsUp, FaComment, FaShare, FaBookmark, FaTwitter,
  FaLinkedin, FaLink, FaWhatsapp, FaTelegram, FaRegBookmark,
  FaRegHeart, FaHeart, FaFacebook
} from 'react-icons/fa';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [showShareMenu, setShowShareMenu] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Load saved likes and bookmarks from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem('blogLikedPosts');
    const savedBookmarks = localStorage.getItem('blogBookmarkedPosts');
    if (savedLikes) setLikedPosts(JSON.parse(savedLikes));
    if (savedBookmarks) setBookmarkedPosts(JSON.parse(savedBookmarks));
  }, []);

  // Categories with icons
  const categories = [
    { name: 'All', icon: FaBlog, color: '#06b6d4' },
    { name: 'Technical', icon: FaCode, color: '#06b6d4' },
    { name: 'AI/ML', icon: FaBrain, color: '#a855f7' },
    { name: 'Web Development', icon: FaReact, color: '#06b6d4' },
    { name: 'Career', icon: FaStar, color: '#f97316' },
    { name: 'Tutorial', icon: FaBookmark, color: '#10b981' },
  ];

  // Sample blog posts (will be replaced by GitHub data)
  const samplePosts = [
    {
      id: 1,
      title: "Building a Full-Stack AI Application with React and FastAPI",
      excerpt: "Learn how to integrate OpenAI API with React frontend and FastAPI backend to create intelligent applications that can generate content, answer questions, and process natural language.",
      content: `<p>In this comprehensive guide, we'll explore how to build a full-stack AI application using React for the frontend and FastAPI for the backend. We'll integrate OpenAI's GPT API to create an intelligent chatbot that can answer questions about your data.</p>
      
      <h2>Prerequisites</h2>
      <ul>
        <li>Basic knowledge of React and Python</li>
        <li>Node.js and Python installed</li>
        <li>OpenAI API key</li>
      </ul>
      
      <h2>Setting up the Backend with FastAPI</h2>
      <p>First, let's create a FastAPI backend that will handle requests to OpenAI's API. FastAPI is perfect for this because of its async support and automatic API documentation.</p>
      
      <pre><code>from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": request.message}]
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))</code></pre>
      
      <h2>Building the React Frontend</h2>
      <p>Now, let's create a React component that will communicate with our FastAPI backend.</p>
      
      <pre><code>import { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/api/chat', {
        message: message
      });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>
      {response && <div className="response">{response}</div>}
    </div>
  );
}</code></pre>
      
      <h2>Deployment Considerations</h2>
      <p>When deploying your application, consider using Vercel for the frontend and Railway or Heroku for the backend. Don't forget to secure your API keys using environment variables.</p>
      
      <h2>Conclusion</h2>
      <p>You've now built a full-stack AI application! This architecture can be extended to include more advanced features like conversation history, user authentication, and vector databases for RAG implementations.</p>`,
      category: "Technical",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/06b6d4/ffffff?text=K",
      date: "2026-05-15",
      readTime: "8 min read",
      tags: ["React", "FastAPI", "AI", "OpenAI", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      likes: 245,
      comments: 18,
      views: 1234,
      featured: true
    },
    {
      id: 2,
      title: "Mastering Data Structures and Algorithms for Technical Interviews",
      excerpt: "A comprehensive guide to prepare for technical interviews with practical examples, problem-solving strategies, and proven techniques to ace coding interviews at top tech companies.",
      content: `<p>Data Structures and Algorithms (DSA) form the backbone of technical interviews at major tech companies. This guide will help you master DSA concepts and ace your interviews.</p>
      
      <h2>Essential Data Structures to Master</h2>
      <ul>
        <li><strong>Arrays and Strings</strong> - The foundation of most problems</li>
        <li><strong>Linked Lists</strong> - Understanding pointers and node manipulation</li>
        <li><strong>Stacks and Queues</strong> - LIFO and FIFO structures</li>
        <li><strong>Hash Tables</strong> - O(1) lookups for efficient solutions</li>
        <li><strong>Trees and Graphs</strong> - Hierarchical and network structures</li>
        <li><strong>Heaps and Priority Queues</strong> - For scheduling and ordering</li>
      </ul>
      
      <h2>Key Algorithms to Know</h2>
      <h3>Sorting Algorithms</h3>
      <ul>
        <li>Quick Sort - Divide and conquer, average O(n log n)</li>
        <li>Merge Sort - Stable sorting with O(n log n)</li>
        <li>Heap Sort - In-place sorting using heap data structure</li>
      </ul>
      
      <h3>Search Algorithms</h3>
      <ul>
        <li>Binary Search - O(log n) for sorted arrays</li>
        <li>DFS and BFS - Tree and graph traversal</li>
        <li>Dijkstra's Algorithm - Shortest path in weighted graphs</li>
      </ul>
      
      <h2>Problem-Solving Strategies</h2>
      <ol>
        <li><strong>Understand the problem</strong> - Ask clarifying questions</li>
        <li><strong>Brute force approach</strong> - Get a working solution first</li>
        <li><strong>Optimize</strong> - Look for patterns and redundancies</li>
        <li><strong>Walk through examples</strong> - Test your approach</li>
        <li><strong>Write clean code</strong> - Use meaningful variable names</li>
      </ol>
      
      <h2>Practice Resources</h2>
      <ul>
        <li>LeetCode - 500+ problems solved with varying difficulty</li>
        <li>HackerRank - Practice competitive programming</li>
        <li>CodeSignal - Interview practice with real scenarios</li>
      </ul>
      
      <h2>Interview Tips</h2>
      <p>During the interview, communicate your thought process clearly. Start with a brute force solution, then optimize. Handle edge cases and test your code with sample inputs.</p>`,
      category: "Career",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/a855f7/ffffff?text=K",
      date: "2026-05-10",
      readTime: "12 min read",
      tags: ["DSA", "Interview Prep", "Algorithms", "Career", "LeetCode"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
      likes: 189,
      comments: 24,
      views: 2156,
      featured: false
    },
    {
      id: 3,
      title: "Getting Started with Spring Boot Microservices",
      excerpt: "Build scalable microservices architecture using Spring Boot, Spring Cloud, and Docker. Learn service discovery, API gateway, and inter-service communication.",
      content: `<p>Microservices architecture has become the standard for building scalable and maintainable applications. In this tutorial, we'll build a microservices system using Spring Boot.</p>
      
      <h2>What are Microservices?</h2>
      <p>Microservices are small, independent services that work together to form a larger application. Each service focuses on a specific business capability and can be developed, deployed, and scaled independently.</p>
      
      <h2>Setting Up Service Discovery with Eureka</h2>
      <pre><code>@SpringBootApplication
@EnableEurekaServer
public class ServiceRegistryApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceRegistryApplication.class, args);
    }
}</code></pre>
      
      <h2>Creating a REST Service</h2>
      <pre><code>@SpringBootApplication
@EnableEurekaClient
@RestController
public class UserServiceApplication {
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id);
    }
}</code></pre>
      
      <h2>API Gateway with Spring Cloud Gateway</h2>
      <pre><code>spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/orders/**</code></pre>
      
      <h2>Dockerizing Your Microservices</h2>
      <pre><code>FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use distributed tracing with Zipkin</li>
        <li>Implement circuit breakers with Resilience4j</li>
        <li>Centralize configuration with Spring Cloud Config</li>
        <li>Use container orchestration with Kubernetes</li>
      </ul>`,
      category: "Web Development",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/06b6d4/ffffff?text=K",
      date: "2026-05-05",
      readTime: "10 min read",
      tags: ["Spring Boot", "Java", "Microservices", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
      likes: 156,
      comments: 12,
      views: 1876,
      featured: false
    },
    {
      id: 4,
      title: "Exploring RAG Systems for Enhanced AI Applications",
      excerpt: "Implement Retrieval-Augmented Generation to improve AI model responses with custom knowledge bases. Learn about vector databases, embeddings, and context injection.",
      content: `<p>Retrieval-Augmented Generation (RAG) is revolutionizing how we build AI applications by combining the power of large language models with custom knowledge bases.</p>
      
      <h2>What is RAG?</h2>
      <p>RAG allows you to provide LLMs with relevant context from your own documents, improving accuracy and reducing hallucinations. The system retrieves relevant information from a knowledge base and augments the prompt with this context.</p>
      
      <h2>Setting Up a Vector Database with Pinecone</h2>
      <pre><code>import pinecone

pinecone.init(api_key="your-api-key")
index = pinecone.Index("knowledge-base")

# Create embeddings
embeddings = OpenAIEmbeddings()
vectors = embeddings.embed_documents(documents)</code></pre>
      
      <h2>Implementing the RAG Pipeline</h2>
      <pre><code>from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vector_store.as_retriever()
)

response = qa_chain.run("What is our company policy on remote work?")</code></pre>
      
      <h2>Optimizing Retrieval</h2>
      <ul>
        <li>Use hybrid search (dense + sparse vectors)</li>
        <li>Implement re-ranking for better relevance</li>
        <li>Chunk documents optimally for retrieval</li>
        <li>Use metadata filtering for domain-specific queries</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <ul>
        <li>Customer support chatbots with product knowledge</li>
        <li>Document analysis and question answering</li>
        <li>Personalized content recommendation</li>
        <li>Code documentation assistants</li>
      </ul>`,
      category: "AI/ML",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/a855f7/ffffff?text=K",
      date: "2026-04-28",
      readTime: "7 min read",
      tags: ["RAG", "AI", "LangChain", "Vector DB", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      likes: 312,
      comments: 28,
      views: 2678,
      featured: true
    },
    {
      id: 5,
      title: "Optimizing React Performance for Production",
      excerpt: "Best practices and techniques to optimize React applications for better performance and user experience. Learn about code splitting, memoization, and virtual scrolling.",
      content: `<p>React applications can become slow as they grow. This guide will show you proven techniques to optimize your React apps for production.</p>
      
      <h2>Code Splitting with React.lazy</h2>
      <pre><code>import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}</code></pre>
      
      <h2>Memoization Techniques</h2>
      <pre><code>import { useMemo, useCallback, memo } from 'react';

// Memoize expensive computations
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);
  
  // Memoize callbacks
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return <div>{processedData}</div>;
};

// Memoize component
export default memo(ExpensiveComponent);</code></pre>
      
      <h2>Virtual Scrolling for Large Lists</h2>
      <pre><code>import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>
    Item {index}
  </div>
);

function MyList() {
  return (
    <List
      height={400}
      itemCount={10000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}</code></pre>
      
      <h2>Performance Monitoring</h2>
      <ul>
        <li>Use React DevTools Profiler</li>
        <li>Monitor bundle size with Webpack Bundle Analyzer</li>
        <li>Implement performance budgets</li>
        <li>Use Lighthouse for performance scoring</li>
      </ul>`,
      category: "Technical",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/06b6d4/ffffff?text=K",
      date: "2026-04-20",
      readTime: "6 min read",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800",
      likes: 178,
      comments: 15,
      views: 1456,
      featured: false
    },
    {
      id: 6,
      title: "Cloud Computing with AWS: A Beginner's Guide",
      excerpt: "Learn the fundamentals of AWS cloud services including EC2, S3, Lambda, and more. Perfect for developers starting their cloud journey.",
      content: `<p>Amazon Web Services (AWS) is the leading cloud platform. This guide will help you understand core AWS services and how to use them.</p>
      
      <h2>Core AWS Services</h2>
      <h3>Compute Services</h3>
      <ul>
        <li><strong>EC2</strong> - Virtual machines in the cloud</li>
        <li><strong>Lambda</strong> - Serverless function execution</li>
        <li><strong>ECS/EKS</strong> - Container orchestration</li>
      </ul>
      
      <h3>Storage Services</h3>
      <ul>
        <li><strong>S3</strong> - Object storage for files and data</li>
        <li><strong>EBS</strong> - Block storage for EC2 instances</li>
        <li><strong>Glacier</strong> - Archival storage</li>
      </ul>
      
      <h2>Deploying a React App to S3</h2>
      <pre><code># Build your React app
npm run build

# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Deploy to S3
aws s3 sync build/ s3://your-bucket-name</code></pre>
      
      <h2>Creating a Lambda Function</h2>
      <pre><code>exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Hello from Lambda!'
        })
    };
};</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use IAM roles for permissions</li>
        <li>Enable CloudWatch for monitoring</li>
        <li>Set up billing alerts</li>
        <li>Use tags for resource organization</li>
      </ul>`,
      category: "Technical",
      author: "Kalaiyarasu MR",
      authorRole: "Software Development Engineer",
      authorImage: "https://via.placeholder.com/100/06b6d4/ffffff?text=K",
      date: "2026-04-15",
      readTime: "9 min read",
      tags: ["AWS", "Cloud", "DevOps", "S3", "Lambda"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      likes: 203,
      comments: 22,
      views: 2234,
      featured: false
    }
  ];

  // Fetch blog posts from GitHub
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/kalaiyarasumr/blog-posts/contents/posts.json');
      
      if (response.ok) {
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        setPosts(content.posts);
        setFilteredPosts(content.posts);
        const featured = content.posts.find(post => post.featured === true);
        setFeaturedPost(featured || content.posts[0]);
      } else {
        setPosts(samplePosts);
        setFilteredPosts(samplePosts);
        const featured = samplePosts.find(post => post.featured === true);
        setFeaturedPost(featured || samplePosts[0]);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setPosts(samplePosts);
      setFilteredPosts(samplePosts);
      const featured = samplePosts.find(post => post.featured === true);
      setFeaturedPost(featured || samplePosts[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
    const interval = setInterval(fetchBlogPosts, 300000);
    return () => clearInterval(interval);
  }, []);

  // Filter posts
  useEffect(() => {
    let filtered = posts;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, posts]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Share on social media platforms
  const shareOnSocial = (platform, post) => {
    const url = window.location.href;
    const text = encodeURIComponent(post.title);
    const encodedUrl = encodeURIComponent(url);
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${encodedUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareMenu(null);
    showToast(`Shared to ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`, 'success');
  };

  // Copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast('Link copied to clipboard!', 'success');
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      showToast('Failed to copy link', 'error');
    }
  };

  // Like post
  const handleLike = (postId) => {
    if (likedPosts[postId]) {
      setLikedPosts(prev => {
        const newLikes = { ...prev };
        delete newLikes[postId];
        localStorage.setItem('blogLikedPosts', JSON.stringify(newLikes));
        return newLikes;
      });
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, likes: post.likes - 1 } : post
      ));
      showToast('Removed like', 'info');
    } else {
      setLikedPosts(prev => {
        const newLikes = { ...prev, [postId]: true };
        localStorage.setItem('blogLikedPosts', JSON.stringify(newLikes));
        return newLikes;
      });
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ));
      showToast('Liked!', 'success');
    }
  };

  // Bookmark post
  const handleBookmark = (postId) => {
    if (bookmarkedPosts[postId]) {
      setBookmarkedPosts(prev => {
        const newBookmarks = { ...prev };
        delete newBookmarks[postId];
        localStorage.setItem('blogBookmarkedPosts', JSON.stringify(newBookmarks));
        return newBookmarks;
      });
      showToast('Removed from bookmarks', 'info');
    } else {
      setBookmarkedPosts(prev => {
        const newBookmarks = { ...prev, [postId]: true };
        localStorage.setItem('blogBookmarkedPosts', JSON.stringify(newBookmarks));
        return newBookmarks;
      });
      showToast('Saved to bookmarks!', 'success');
    }
  };

  // Handle reading article (all free now)
  const handleReadArticle = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="min-h-screen bg-transparent pt-24">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
              toastMessage.type === 'success' ? 'bg-green-500/90' : 
              toastMessage.type === 'error' ? 'bg-red-500/90' : 'bg-blue-500/90'
            } text-white text-sm font-medium`}
          >
            {toastMessage.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative overflow-hidden  from-cyanCustom/5 to-purpleCustom/5 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              Insights, tutorials, and stories about software development, AI, and technology
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Featured Post */}
        {featuredPost && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="glassmorphism rounded-3xl overflow-hidden border border-cyanCustom/20 hover:border-cyanCustom/40 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyanCustom to-purpleCustom text-white text-xs font-semibold">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={12} />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-cyanCustom transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyanCustom to-purpleCustom flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {featuredPost.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{featuredPost.author}</p>
                        <p className="text-slate-500 text-xs">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleReadArticle(featuredPost)}
                      className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles by title, topic, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-cyanCustom/50 focus:outline-none transition-all duration-300"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyanCustom to-purpleCustom text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  <Icon size={14} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyanCustom"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glassmorphism rounded-2xl overflow-hidden border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleReadArticle(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-full bg-cyanCustom/20 backdrop-blur-sm text-xs font-semibold text-cyanCustom border border-cyanCustom/30">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white/80 text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <FaEye size={12} />
                      <span>{post.views}</span>
                    </div>
                    {/* Bookmark button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(post.id);
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 backdrop-blur-sm hover:bg-cyanCustom/20 transition-all duration-300"
                    >
                      {bookmarkedPosts[post.id] ? (
                        <FaBookmark className="text-cyanCustom text-xs" />
                      ) : (
                        <FaRegBookmark className="text-slate-300 text-xs" />
                      )}
                    </button>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={11} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyanCustom transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyanCustom to-purpleCustom flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">{post.author.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(post.id);
                          }}
                          className={`flex items-center gap-1 text-xs transition-colors ${
                            likedPosts[post.id] ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'
                          }`}
                        >
                          {likedPosts[post.id] ? <FaHeart size={12} /> : <FaRegHeart size={12} />}
                          <span>{post.likes}</span>
                        </button>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <FaComment size={12} />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <FaBlog className="text-6xl text-slate-700 mx-auto mb-4" />
                <p className="text-slate-400">No posts found matching your criteria.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkNavy/95 backdrop-blur-md overflow-y-auto"
            onClick={() => {
              setSelectedPost(null);
              setShowShareMenu(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setSelectedPost(null);
                  setShowShareMenu(null);
                }}
                className="fixed top-6 right-6 z-10 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-cyanCustom/20 text-cyanCustom text-xs font-semibold">
                      {selectedPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyanCustom to-purpleCustom flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {selectedPost.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{selectedPost.author}</p>
                      <p className="text-slate-500 text-sm">{selectedPost.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={14} />
                      {formatDate(selectedPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={14} />
                      {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye size={14} />
                      {selectedPost.views} views
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div 
                  className="prose prose-invert max-w-none blog-content"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
                
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleLike(selectedPost.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                          likedPosts[selectedPost.id]
                            ? 'border-pink-500 text-pink-500 bg-pink-500/10'
                            : 'border-slate-700 text-slate-400 hover:text-pink-500 hover:border-pink-500'
                        }`}
                      >
                        {likedPosts[selectedPost.id] ? <FaHeart /> : <FaRegHeart />}
                        <span>{selectedPost.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 hover:text-cyanCustom hover:border-cyanCustom transition-all duration-300">
                        <FaComment />
                        <span>Comment</span>
                      </button>
                    </div>
                    
                    {/* Share Menu */}
                    <div className="relative">
                      <button 
                        onClick={() => setShowShareMenu(showShareMenu === selectedPost.id ? null : selectedPost.id)}
                        className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-cyanCustom hover:border-cyanCustom transition-all duration-300"
                      >
                        <FaShare />
                      </button>
                      
                      {showShareMenu === selectedPost.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden z-20"
                        >
                          <div className="p-2 space-y-1">
                            <button
                              onClick={() => shareOnSocial('twitter', selectedPost)}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaTwitter className="text-blue-400" />
                              Twitter
                            </button>
                            <button
                              onClick={() => shareOnSocial('linkedin', selectedPost)}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaLinkedin className="text-blue-600" />
                              LinkedIn
                            </button>
                            <button
                              onClick={() => shareOnSocial('whatsapp', selectedPost)}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaWhatsapp className="text-green-500" />
                              WhatsApp
                            </button>
                            <button
                              onClick={() => shareOnSocial('telegram', selectedPost)}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaTelegram className="text-blue-400" />
                              Telegram
                            </button>
                            <button
                              onClick={() => shareOnSocial('facebook', selectedPost)}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaFacebook className="text-blue-700" />
                              Facebook
                            </button>
                            <div className="border-t border-slate-700 my-1"></div>
                            <button
                              onClick={copyToClipboard}
                              className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              <FaLink />
                              {copiedLink ? 'Copied!' : 'Copy Link'}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .blog-content {
          color: #cbd5e1;
        }
        .blog-content h2 {
          color: white;
          font-size: 1.5rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        .blog-content h3 {
          color: #06b6d4;
          font-size: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content pre {
          background: #0f172a;
          padding: 1rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .blog-content code {
          background: #1e293b;
          padding: 0.2rem 0.4rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;