import { Viewer } from "@bytemd/react";
import "bytemd/dist/index.css";
import "highlight.js/styles/default.css";
import { BYTEMD_EDITOR_PLUGINS } from "modules/texts/constants/text.constants";
import { MarkdownPreview } from "./style";

const value =
	// eslint-disable-next-line quotes
	'# Links\n\n\n## Pattern\n| Theme   | Link \n| ------- | -------- | \n| React pattern | [Link](https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about/) | \n\n\n## Hooks\n| Theme   | Link \n| ------- | -------- | \n| Your Guide to useCallback | [Link](https://dmitripavlutin.com/react-usecallback) | \n| When to useMemo and useCallback | [Link](https://kentcdodds.com/blog/usememo-and-usecallback) | \n| Use react memo wisely | [Link](https://dmitripavlutin.com/use-react-memo-wisely/) | \n| Context effectively | [Link](https://kentcdodds.com/blog/how-to-use-react-context-effectively) | \n| Create custom hook | [Link](https://usehooks.com) | \n\n## Forms\n| Theme   | Link \n| ------- | -------- | \n| How to use Forms in React | [Link](https://www.robinwieruch.de/react-form) | \n\n\n## Tests\n| Theme   | Link \n| ------- | -------- | \n| How to test hook | [Link](https://kentcdodds.com/blog/how-to-test-custom-react-hooks) | \n| Common mistakes with React Testing Library | [Link](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) | \n| How to test a function expect throw | [Link](https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462) |\n| Improve Jest Runner Performance | [Link](https://blog.developer.adobe.com/improve-jest-runner-performance-a8f56708ba94) |\n| Your Jest Tests are Leaking Memory | [Link](https://chanind.github.io/javascript/2019/10/12/jest-tests-memory-leak.html) | \n| Why Is My Jest Test Suite So Slow? | [Link](https://dev.to/twynsicle/why-is-my-jest-test-suite-so-slow-1od) | \n| Optimizing Jest for Faster CI Performance with GitHub Actions | [Link](https://javascript.plainenglish.io/optimizing-jest-for-faster-ci-performance-with-github-actions-f4d7100c86c5) | \n\n\n## Tips\n| Theme   | Link \n| ------- | -------- | \n| Fix the "not wrapped in act(...)" warning | [Link](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning) | \n| When should I use act() in react-testing-library? | [Link](https://flyingsquirrel.medium.com/when-should-i-use-act-in-react-testing-library-d7dd22a3340e) | \n| Why you shouldn\'t put refs in a dependency array | [Link](https://epicreact.dev/why-you-shouldnt-put-refs-in-a-dependency-array/) | \n\n\n## Performance \n### useMemo (expensive calculations)\n\n| Theme   | Link \n| ------- | -------- | \n| Wrap function in useMemo | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/02.js) | \n| Production mode | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/02.extra-1.js) | \n| Use WebWorker | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/02.extra-2.js) | \n\n### React.memo (reducing re-renders)\n\n| Theme   | Link \n| ------- | -------- | \n| Memorize component | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/03.js) | \n| Custom comparator | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/03.extra-1.js) |\n| Primitive values | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/03.extra-2.js) |\n\n### React-virtual (large lists)\n\n| Theme   | Link \n| ------- | -------- | \n| Render large lists | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/04.js) | \n\n### Optimize context value\n\n| Theme   | Link \n| ------- | -------- | \n| Memoize context value | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/05.js) | \n| Separate the contexts | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/05.extra-1.js) |\n\n### Fix perf death by a thousand cuts\n\n| Theme   | Link \n| ------- | -------- | \n| Colocate state | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/06.js) | \n| Separate contexts | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/06.extra-1.js) | \n| Consuming components | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/06.extra-2.js) | \n| Slice of app state | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/06.extra-3.js) | \n| Use recoil | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/06.extra-4.js) | \n\n### Production Performance Monitoring \n\n| Theme   | Link \n| ------- | -------- | \n| Add performance monitoring | [Link](https://github.com/kentcdodds/react-performance/blob/main/src/final/07.js) | \n\n\n\n\n\n\n\n\n\n\n';

const MarkdownPreviewView: React.FC = () => {
	return (
		<MarkdownPreview>
			<div className="bytemd">
				<div className="bytemd-body">
					<div className="bytemd-preview">
						<Viewer value={value} plugins={BYTEMD_EDITOR_PLUGINS} />
					</div>
				</div>
			</div>
		</MarkdownPreview>
	);
};

export default MarkdownPreviewView;