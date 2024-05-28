const payload = {
  "model_id": "ibm/granite-20b-code-instruct-v1",
  "parameters": {
    "decoding_method": "greedy",
    "stop_sequences": [
      "\n"
    ],
    "include_stop_sequence": false,
    "min_new_tokens": 1,
    "max_new_tokens": 4096
  },
  "moderations": {
    "hap": {
      "input": {
        "enabled": true,
        "threshold": 0.75
      },
      "output": {
        "enabled": true,
        "threshold": 0.75
      }
    }
  },
  "prompt_id": "prompt_builder",
  "data": {
    "input": "",
    "instruction": "Generate the filter code in python pandas from given natural language statement",
    "input_prefix": "Input:",
    "output_prefix": "Output:",
    "examples": [
      {
        "input": "How many unique database instances found in the report?",
        "output": "df['DB Name'].nunique()"
      },
      {
        "input": "List down the rows that has column names ending with name but not having the words first and last",
        "output": "df[df['Column Name'].str.contains('name') & (df['Column Name'] != 'first name') & (df['Column Name'] != 'last name')]"
      },
      {
        "input": "List down the rows that has column names ending with name and having the words first and last",
        "output": "df[df['Column Name'].str.contains('name') & ((df['Column Name'] == 'first name') | (df['Column Name'] == 'last name'))]"
      },
      {
        "input": "Filter this list with the rows that has the word only age in the column name",
        "output": "df[df['Column Name'] == 'age']"
      },
    ],
    "system_prompt": "You are Granite Chat, an AI language model developed by IBM. You are a cautious assistant that carefully follows instructions. You are helpful and harmless and you follow ethical guidelines and promote positive behavior. You respond in a comprehensive manner unless instructed otherwise, providing explanations when needed while maintaining a neutral tone. You are capable of coding, writing, and roleplaying. You are cautious and refrain from generating real-time information, highly subjective or opinion-based topics. You are harmless and refrain from generating content involving any form of bias, violence, discrimination or inappropriate content. You always respond to greetings (for example, hi, hello, g'\''day, morning, afternoon, evening, night, what'\''s up, nice to meet you, sup, etc) with \"Hello! I am Granite Chat, created by IBM. How can I help you today?\". Please do not say anything else and do not start a conversation."
  }
}

export default payload
