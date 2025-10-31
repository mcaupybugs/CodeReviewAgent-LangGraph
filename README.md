# Code Review Agent

An AI-powered code review application that uses LangGraph and Azure OpenAI to provide automated code analysis, issue detection, and comprehensive review reports.

## 🌟 Features

- **Automated Code Analysis**: AI-driven analysis of code structure and purpose
- **Issue Detection**: Identifies 3-5 specific issues in submitted code
- **Comprehensive Reports**: Generates detailed review reports with summaries and recommendations
- **Modern UI**: Built with Next.js and React for a smooth user experience
- **LangGraph Workflow**: Uses a state machine approach for systematic code review

## 🏗️ Architecture

The project consists of two main components:

### Backend (FastAPI + LangGraph)

- **FastAPI**: RESTful API server
- **LangGraph**: Orchestrates the multi-step code review workflow
- **Azure OpenAI**: Powers the AI analysis using GPT-4
- **Three-stage pipeline**:
  1. **Analyzer**: Initial code analysis
  2. **Issue Finder**: Identifies specific problems
  3. **Report Generator**: Creates final review report

### Frontend (Next.js)

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Modern UI**: Clean interface for code submission and review display

## 📋 Prerequisites

- Python 3.9+
- Node.js 18+
- Azure OpenAI account with API access

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd CodeReviewAgent
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv codereview
source codereview/bin/activate  # On Windows: codereview\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your Azure OpenAI credentials

# Run the backend server
uvicorn app:app --reload
```

The backend API will be available at `http://localhost:8000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```bash
AZURE_OPENAI_API_KEY=your-azure-openai-api-key-here
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_API_VERSION=2024-12-01-preview
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
```

### Azure OpenAI Setup

1. Create an Azure OpenAI resource in the Azure Portal
2. Deploy a GPT-4 model
3. Copy your API key, endpoint, and deployment name
4. Update the `.env` file with these values

## 📡 API Endpoints

### POST `/review`

Review submitted code.

**Request Body:**

```json
{
  "code": "your code here"
}
```

**Response:**

```json
{
  "analysis": "Initial analysis of the code",
  "issues": ["- Issue 1", "- Issue 2", "- Issue 3"],
  "report": "Comprehensive review report"
}
```

## 🛠️ Technology Stack

### Backend

- **FastAPI**: Web framework
- **LangChain**: LLM application framework
- **LangGraph**: Workflow orchestration
- **Azure OpenAI**: Language model
- **Python-dotenv**: Environment variable management
- **Pydantic**: Data validation

### Frontend

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React 19**: UI library

## 📁 Project Structure

```
CodeReviewAgent/
├── backend/
│   ├── app.py              # FastAPI application & LangGraph workflow
│   ├── .env.example        # Environment variables template
│   ├── codereview/         # Python virtual environment
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/
│   │   └── app/           # Next.js app directory
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   └── next.config.ts     # Next.js configuration
└── README.md              # This file
```

## 🔍 How It Works

1. **User submits code** through the frontend interface
2. **Backend receives request** at the `/review` endpoint
3. **LangGraph workflow executes**:
   - Analyzer node performs initial code analysis
   - Issue Finder identifies specific problems
   - Report Generator creates comprehensive review
4. **Results returned** to frontend and displayed to user

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues / Future Enhancements

- Add user authentication
- Support for multiple programming languages
- Code diff visualization
- Historical review tracking
- Export reports as PDF
- Integration with Git repositories

## 📧 Contact

For questions or feedback, please open an issue on the repository.
# CodeReviewAgent-LangGraph
