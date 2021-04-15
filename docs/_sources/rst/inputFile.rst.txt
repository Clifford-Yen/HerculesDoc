==========
Input file
==========

Basic rules
===========
When you open a Hercules' input file, you will see lines like

.. code-block::

    planes_input_file = inputfiles/parameters.in
    Istanbul_material_model = yes
    output_mesh = 0
    region_origin_latitude_deg  = 40.69146389
    number_profile_layers = 8
    profile_layers =
          0     2880   1800    2200     100     100
       1000     3600   2250    2300     100     100
       2000     4000   2500    2350     100     100
       3000     4320   2700    2400     100     100
       4000     4640   2900    2450     100     100
       5000     5770   3490    2600     100     100
      10000     6390   3500    2700     100     100
      20000     6790   3920    2800     100     100

As you can see, the basic rule for writing an input file is

.. code-block::

    parameter_name = parameter_value

or

.. code-block::

    parameter_name =
    parameter_value1 parameter_value2 parameter_value3

A parameter value can be a number (either an integer or floating-point number), a path, a boolean value (0 or 1), and a yes/no, etc. A parameter name can also takes multiple values, e.g. ``profile_layers``.

There is no any restriction on how many spaces should be placed between the parameter name, the equal sign, and the parameter value. If you want, you can indent the equal sign or the parameter value based on your preference.

Similarly, there is no restriction on how many spaces should be placed before and among parameter values if the parameter name takes multiple values.

Also, you can place parameters in any order in an input file. Just make sure you include all necessary parameters in the input file you are going to use.

In sections below, we will explain each parameter with following format:

``parameter_name``
    * Optional: Yes/No
    * Type: Integer/Float/File path/Boolean/Yes or No/Multiple numbers
    * Format: The format for each row below the ``parameter_name``. This column only appears when the type of the parameter is "Multiple numbers".
    * Description:

Although we plan to modify Hercules to make it possible to accept optional inputs, it's not implemented yet. As a result, please note that all parameters explained in sections below are mandatory, and the "Optional" column will not be included in sections below. Also, since some parameters are not useful or not really necessary at this point, this documentation will only cover essential parameters. If you can not understand the usage of a parameter and can not find the explanation of it in this documentation, please feel free to leave it as is.

.. toctree::
    :maxdepth: 2
    :caption: You can find parameters used in input files in the following sections:
 
    material
    dimension
    drm
