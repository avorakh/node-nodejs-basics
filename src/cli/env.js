const prefix = 'RSS_';

const parseEnv = () => {
       let envVariables = process.env;
       let matchedEnvVars = [];

       for (let [key, value] of Object.entries(envVariables)) {
           if (key.startsWith(prefix)) {
               matchedEnvVars.push(`${key}=${value}`);
           }
       }

       console.log(matchedEnvVars.join('; '));
};

parseEnv();