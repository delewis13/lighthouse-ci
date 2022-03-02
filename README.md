# Collecting performance metrics with lighthouse-ci

## How to use

Install packages:
`yarn`

Collect results:
`yarn mobile <your_desired_directory_name_to_save_results>`

Aggregate results to print to console:
`yarn aggregate <relative_path_to_directory_you_just_saved>`

## Mobile vs Desktop

Only supports mobile benchmarks at the moment.
If you have the will, you could add the appropriate lighthouse-ci config files to emulate desktop also.
